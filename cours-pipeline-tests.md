# Cours — Pipeline CI/CD & Tests pour JeuxVideOps

---

## 1. Le problème que tout ça résout

Imagine ton équipe sans pipeline. Chaque développeur code dans son coin, et au moment de livrer :
- "Ça marche sur ma machine" — mais pas chez les autres
- Un bug passe en prod le soir d'une remise
- Personne ne sait si le code est propre ou pas

Le pipeline CI/CD existe pour **automatiser toutes les vérifications** à chaque fois que quelqu'un push du code. Fini les oublis humains.

---

## 2. C'est quoi concrètement un pipeline GitHub Actions ?

C'est un fichier YAML dans `.github/workflows/` qui décrit une suite d'étapes à exécuter automatiquement sur les serveurs de GitHub.

Il se déclenche dans 3 cas (selon le projet) :

```yaml
on:
  push:                          # à chaque push sur n'importe quelle branche
  pull_request:
    branches: [main]             # quand une PR vise main
  workflow_dispatch:             # manuellement depuis l'interface GitHub
```

Chaque étape (`step`) est un bloc de la chaîne. Si une étape échoue, tout s'arrête — le bug est détecté avant d'aller plus loin.

---

## 3. La structure complète du pipeline pour ce projet

```yaml
on:
  push:
  pull_request:
    branches: [main]
  workflow_dispatch:

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4          # récupère le code source

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install                   # installe les packages

      - name: Lint                         # vérifie le style de code
        run: npx eslint ./src/

      - name: Tests unitaires              # lance les tests
        run: npm test

      - name: Audit dépendances            # détecte les failles de sécurité
        run: npm audit --audit-level=moderate
```

Chaque bloc a un **rôle précis** — on ne met pas tout dans un seul `run`.

---

## 4. Pourquoi chaque étape existe

### Le Linter (ESLint)
Vérifie que le code respecte le **Google JavaScript Style Guide**. Ce n'est pas du snobisme : un code homogène est plus facile à relire, à déboguer, à maintenir. Le linter bloque le pipeline si quelqu'un a commis du code mal formaté.

### Les tests
Un bug trouvé en CI coûte **10× moins cher** qu'un bug trouvé en production. Les tests tournent à chaque push automatiquement — pas besoin d'y penser.

### L'audit de dépendances (`npm audit`)
Les packages npm que tu installes peuvent contenir des **failles de sécurité connues** (appelées CVE). `npm audit` les détecte automatiquement. C'est la partie DevSecOps du projet.

---

## 5. Les tests unitaires — pourquoi et comment

### C'est quoi un test unitaire ?
Un test unitaire vérifie **une seule fonction isolée**. Elle prend une entrée, retourne une sortie prévisible. Pas de navigateur, pas de DOM, juste du calcul pur.

Exemple : `clamp(1, 10, 2)` doit toujours retourner `2`. On le vérifie automatiquement.

### L'outil : Vitest
Vitest est un framework de tests moderne compatible TypeScript nativement. Pas besoin de compiler avant de tester.

**Installation :**
```bash
npm install -D vitest
```
Le `-D` signifie "dépendance de développement" — Vitest ne sera pas embarqué dans le build de production, seulement utilisé pendant le développement.

### La config minimale

`vitest.config.ts` à la racine :
```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node', // ou 'jsdom' si le code utilise le DOM
  },
});
```

`tsconfig.json` :
```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ESNext",
    "strict": true,
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*", "tests/**/*"]
}
```

`package.json` :
```json
{
  "scripts": {
    "test": "vitest run"
  }
}
```

### Comment trouver les fonctions à tester

Les fonctions des jeux js13k sont dans les fichiers source TypeScript. Pour les trouver :
```bash
grep -rn "export function" ./src/
```

Si elles ne sont pas exportées, on ajoute `export` devant :
```ts
// avant
function clamp(min: number, max: number, v: number) { ... }

// après
export function clamp(min: number, max: number, v: number) { ... }
```

### Écrire les tests

Fichier `tests/math.test.ts` :
```ts
import { describe, it, expect } from 'vitest';
import { clamp, lerp } from '../src/math';

// Tests fournis par le PDF
describe('clamp', () => {
  it('clamp(1,10,2) returns 2', () => {
    expect(clamp(1, 10, 2)).toBe(2);
  });
  it('clamp(1,10,-12) returns 1', () => {
    expect(clamp(1, 10, -12)).toBe(1);
  });
});

describe('lerp', () => {
  it('lerp(1,10,2) returns 19', () => {
    expect(lerp(1, 10, 2)).toBe(19);
  });
});

// Tes 5 tests supplémentaires — cas limites
describe('clamp - cas limites', () => {
  it('retourne max si valeur trop haute', () => {
    expect(clamp(1, 10, 99)).toBe(10);
  });
  it('retourne min si exactement sur la borne', () => {
    expect(clamp(5, 10, 5)).toBe(5);
  });
});
```

### La structure `describe / it / expect`
- `describe` : groupe de tests liés à une même fonction
- `it` : un cas de test précis (une entrée → une sortie attendue)
- `expect(...).toBe(...)` : la vérification — si c'est faux, le test échoue

---

## 6. Les tests fonctionnels — pourquoi et comment

### La différence avec les tests unitaires

| Test unitaire | Test fonctionnel |
|---|---|
| Teste une fonction isolée | Teste le comportement du jeu dans un navigateur |
| Rapide, pas de DOM | Plus lent, simule un vrai utilisateur |
| `clamp(1,10,2) === 2` | "Le canvas s'affiche au chargement de la page" |

### L'outil : Playwright
Playwright simule un navigateur (Chrome, Firefox) et permet d'interagir avec la page comme un utilisateur.

**Installation :**
```bash
npm install -D @playwright/test
npx playwright install chromium
```

### Exemples de tests fonctionnels

```ts
import { test, expect } from '@playwright/test';

test('la page se charge sans erreur', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page).toHaveTitle(/Space Invaders/);
});

test('le canvas est présent', async ({ page }) => {
  await page.goto('http://localhost:8080');
  const canvas = page.locator('canvas');
  await expect(canvas).toBeVisible();
});

test('le jeu démarre au clic', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.click('#start-button');
  await expect(page.locator('#game-screen')).toBeVisible();
});
```

---

## 7. Les erreurs fréquentes et leurs solutions

| Erreur | Cause | Solution |
|---|---|---|
| `Cannot find module 'vitest'` | Vitest pas installé | `npm install -D vitest` |
| `Cannot find module './src/math'` | Chemin d'import incorrect | Vérifier avec `find . -name "math.ts"` et ajuster le chemin |
| `document is not defined` | Code qui utilise le DOM tourné dans Node | Changer `environment: 'jsdom'` dans vitest.config.ts |
| Doublons dans `tsconfig.json` | Copier-coller sans vérifier | Garder une seule valeur par clé |

---

## 8. Le fil conducteur du projet

```
Push du code
    ↓
GitHub Actions se déclenche
    ↓
Lint → bloque si code mal formaté
    ↓
Tests unitaires → bloque si une fonction retourne un mauvais résultat
    ↓
Tests fonctionnels → bloque si le jeu ne se comporte pas bien dans le navigateur
    ↓
npm audit → bloque si une faille de sécurité est détectée
    ↓
✅ Tout est vert → le code est validé et peut être déployé
```

C'est ça l'idée centrale : **automatiser pour ne jamais livrer du code cassé.**
