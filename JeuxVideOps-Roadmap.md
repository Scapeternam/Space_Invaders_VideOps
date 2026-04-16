git@github.com:Scapeternam/Workflow-Git-Action.git# 🎮 Jeux VidéOps — Roadmap Complète

> Projet Epitech | WAC | Promo 2027 | Durée : **2 semaines en binôme**
> Stack : JavaScript · GitHub Actions · Docker · GitHub Pages

---

## 📌 Contexte du projet

Tu intègres une boîte de jeux vidéo rétro dont les devs sont pas très rigoureux. Ta mission : mettre en place des **pipelines CI/CD** qui automatisent la qualité, les tests et le déploiement de leurs jeux JS.

**Mantra :** *Automatiser plus pour travailler moins — et livrer plus sûrement.*

---

## 🗺️ Vue d'ensemble — Les 3 phases

```
Phase 1 — Bootstrap (individuel, découverte)
    ↓
Phase 2 — CI complète (2 jeux minimum)
    ↓
Phase 3 — CD + Déploiement (Docker + GitHub Pages)
```

---

## ✅ PHASE 1 — Bootstrap (Warmup solo)

> **Objectif :** Comprendre GitHub Actions et YAML avant d'attaquer le vrai projet.

### Étape 1.1 — Préliminaires

- [ ] Cloner / récupérer l'app Node.js + Express fournie avec le sujet
- [ ] `npm install` + tester en local avec `node index.js` ou `nodemon`
- [ ] Créer ton propre **repo GitHub** (le bootstrap a son propre repo, séparé du projet principal)
- [ ] Push l'app sur ce repo

### Étape 1.2 — Vocabulaire DevOps à maîtriser

Avant d'aller plus loin, savoir définir ces termes (prépare-toi à les expliquer) :

| Terme | Définition courte |
|-------|------------------|
| **Pipeline** | Série d'étapes automatisées de bout en bout |
| **Workflow** | Fichier YAML qui décrit un pipeline GitHub Actions |
| **Job** | Unité d'exécution dans un workflow (peut tourner en parallèle) |
| **Step** | Une étape dans un job (commande ou action réutilisable) |
| **Trigger** | Événement qui déclenche le workflow (push, PR, manuel...) |
| **Runner** | Machine virtuelle qui exécute les jobs (ubuntu-latest par ex.) |
| **Artifact** | Fichier produit par le workflow (rapport de tests, binaire...) |

### Étape 1.3 — Premier workflow `test.yml`

- [ ] Créer le fichier `.github/workflows/test.yml` dans ton repo
- [ ] Configurer le workflow pour qu'il :
  - Se déclenche à chaque `push`
  - Affiche `"Hello Github Actions!"`
  - Liste les fichiers du repo (`ls -la`)
- [ ] Push + vérifier dans l'onglet **Actions** que ça tourne

> ⚠️ Le YAML est sensible à l'**indentation**. Installe l'extension YAML dans ton IDE.

### Étape 1.4 — Passer aux choses sérieuses (CI de l'app calculator)

L'app fournie est une calculatrice Node.js. Trouve dans le `package.json` les commandes pour :

| Commande | Ce qu'elle fait | Pourquoi / Quand |
|----------|-----------------|-----------------|
| `npm test` (unit) | Tests unitaires | À chaque push, avant tout |
| `npm test` (functional) | Tests fonctionnels | Valide le comportement réel |
| `npm run lint` | Vérifie le style Google JS | Avant les tests, qualité du code |
| `npm run coverage` | Rapport de couverture de code | Pour savoir ce qui n'est pas testé |
| `npm run doc` | Génère la documentation | Optionnel mais propre |

- [ ] Mettre à jour le workflow **progressivement** (une commande à la fois)
- [ ] Ajouter le trigger `workflow_dispatch` pour lancer manuellement depuis GitHub
- [ ] Ajouter les steps pour installer Node.js et les dépendances (`actions/setup-node` + `npm ci`)

> ⚠️ **Rien n'est installé sur le runner.** Tu dois tout setup dans le workflow.

### Étape 1.5 — Intégration Continue en action

Ajouter la feature `power` dans l'app :

```js
// modules/calculator.js
power(a, b) {
  if (b < 0) return 1 / a * this.power(a, b + 1);
  else if (b > 0) return a * this.power(a, b - 1);
  else return 1;
}
```

```js
// index.js
app.get('/pow', (req, res) => {
  res.send(`${req.query.a} ^ ${req.query.b} = ${calc.power(parseFloat(req.query.a), parseFloat(req.query.b))}`);
});
```

- [ ] Committer chaque fichier séparément avec un message clair
- [ ] Push et observer ce que le linter dit (le code fourni ne respecte pas Google JS Style)
- [ ] Corriger jusqu'à ce que le workflow soit vert ✅

---

## ✅ PHASE 2 — CI Complète (projet principal)

> **Objectif :** Pipeline CI qui tourne sur **au moins 2 jeux** issus des js13kgames (édition 2021, thème "space").

### Les jeux disponibles (à forker)

| Jeu | Tests unitaires fournis |
|-----|------------------------|
| **Two Ships Passing In The Night** | randFloatSpread, mapLinear, lerp |
| **SpaceWord** | getRandomInt, rectIntersect, circleIntersect, timeToString |
| **Keep White Space** | Vec (add, mul, dot, cross), getTimeStr |
| **Space Invaders** | clamp, lerp, distance, toVector, normalize, dot, add, subtract |

### Étape 2.1 — Setup du repo principal

- [ ] Forker les repos des 2 jeux choisis
- [ ] Créer un repo principal qui les intègre (ou travailler sur le fork directement)
- [ ] Comprendre la structure du code avant de toucher quoi que ce soit

### Étape 2.2 — Workflow CI minimum requis

Le workflow doit se déclencher :
- [ ] **Manuellement** (`workflow_dispatch`)
- [ ] Sur **chaque push** sur n'importe quelle branche
- [ ] Sur **pull request** visant la branche principale

### Étape 2.3 — Tests (obligatoire pour les 2 jeux)

Pour chaque jeu :

- [ ] Lancer les **tests unitaires fournis** en annexe du sujet
- [ ] Rédiger **au moins 5 tests unitaires supplémentaires**
- [ ] Rédiger **au moins 3 tests fonctionnels**

> 💡 Les tests fonctionnels = tester le comportement de l'app de l'extérieur (requête HTTP, rendu, etc.)

### Étape 2.4 — Linter Google JS Style

- [ ] Configurer ESLint avec le preset Google : `eslint-config-google`
- [ ] Lancer le linter dans le workflow
- [ ] Corriger les erreurs de style dans le code des jeux si nécessaire

### Étape 2.5 — Annotations et résumés dans GitHub

- [ ] Utiliser les **workflow commands** pour afficher des résumés dans l'UI GitHub :
  ```yaml
  - name: Test Summary
    run: echo "### Test Results 🧪" >> $GITHUB_STEP_SUMMARY
  ```
- [ ] Afficher le nombre de tests passés/échoués en résumé
- [ ] Ajouter des **annotations** sur les lignes en erreur si possible

### Étape 2.6 — Audit de sécurité (DevSecOps)

- [ ] Ajouter un step `npm audit` dans le workflow
- [ ] Le workflow doit reporter les vulnérabilités détectées
- [ ] Ne jamais committer de tokens/secrets dans les fichiers → utiliser les **GitHub Secrets**

```yaml
# Exemple d'utilisation d'un secret GitHub
- name: Deploy
  env:
    MY_TOKEN: ${{ secrets.MY_TOKEN }}
```

---

## ✅ PHASE 3 — CD + Déploiement

> **Objectif :** Conteneuriser et déployer automatiquement la plateforme web.

### Étape 3.1 — Créer l'app web vitrine

- [ ] Créer une petite app web qui présente les jeux et permet d'y jouer
- [ ] Elle doit intégrer les dernières versions validées de chaque jeu

### Étape 3.2 — Dockeriser

- [ ] Créer un `Dockerfile` pour l'app web
- [ ] Tester l'image en local : `docker build` + `docker run`
- [ ] Optimiser (multi-stage build si pertinent)

### Étape 3.3 — GitHub Action de déploiement

- [ ] Créer un workflow de déploiement séparé (ou un job conditionnel)
- [ ] Il se déclenche uniquement quand la CI est verte (sur `main`)
- [ ] Il build et pousse l'image Docker
- [ ] Il déploie sur **GitHub Pages** (ou équivalent)

> ⚠️ Credentials dans les **GitHub Secrets**, jamais dans les fichiers YAML.

---

## 🎁 Améliorations optionnelles (pour briller)

| Feature | Difficulté | Impact |
|---------|------------|--------|
| Alerte Discord/Slack en cas d'échec | ⭐⭐ | Notification immédiate |
| Audit Lighthouse (perf web) | ⭐⭐⭐ | Score de perf dans la CI |
| Semantic Release (versionnage auto) | ⭐⭐⭐ | Release Notes automatiques |
| Détection de secrets (Gitleaks/TruffleHog) | ⭐⭐ | DevSecOps avancé |
| Screenshot auto si test fonctionnel KO | ⭐⭐⭐ | Debug facilité |
| `npm audit` via Snyk | ⭐⭐ | Meilleur scan de vulnérabilités |

---

## 📐 Structure de repo recommandée

```
jeux-videops/
├── .github/
│   └── workflows/
│       ├── ci.yml          # CI : lint + tests + audit
│       └── deploy.yml      # CD : build Docker + déploiement
├── games/
│   ├── two-ships/          # Fork du jeu 1
│   └── space-invaders/     # Fork du jeu 2
├── web/                    # App vitrine
│   └── Dockerfile
├── tests/
│   ├── unit/
│   └── functional/
└── README.md
```

---

## 🧩 Template de workflow CI de base

```yaml
name: CI Pipeline

on:
  push:
    branches: ["**"]
  pull_request:
    branches: [main]
  workflow_dispatch:

jobs:
  ci:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Lint (Google JS Style)
        run: npm run lint

      - name: Unit tests
        run: npm test

      - name: Security audit
        run: npm audit --audit-level=moderate

      - name: Test summary
        if: always()
        run: echo "### CI terminée ✅" >> $GITHUB_STEP_SUMMARY
```

---

## 📅 Planning suggéré (2 semaines)

| Jour | Objectif |
|------|----------|
| J1 | Bootstrap : premier workflow, vocabulaire DevOps |
| J2 | Bootstrap : CI de l'app calculator complète |
| J3-J4 | Fork des jeux, comprendre le code, écrire les premiers tests |
| J5-J6 | CI complète pour le jeu 1 (lint + tests + audit) |
| J7 | Suivi intermédiaire — CI jeu 1 doit être terminée ✅ |
| J8-J9 | CI complète pour le jeu 2 |
| J10-J11 | App vitrine + Dockerfile |
| J12-J13 | Workflow de déploiement CD |
| J14 | Keynote : chaque membre doit pouvoir expliquer et reproduire |

---

## 🔑 Points clés à retenir pour la keynote

- **DevOps** = culture qui unit Dev et Ops pour livrer plus vite et mieux
- **DevSecOps** = sécurité intégrée dès le début du pipeline (shift left)
- Un bug détecté en CI coûte **10x moins cher** qu'en production
- Ne jamais committer de secrets → **GitHub Secrets** uniquement
- **KISS** : Keep It Stupid Simple — pas d'usine à gaz
- Chaque membre doit être capable de **reproduire le travail** des autres

---

*Généré le 09/04/2026 — Projet Jeux VidéOps Epitech Paris WAC*
 1 lancer le jeu 
cree le fichie yamal 
utiliser les test fouyrnit et en créé si besoin 
faire des test fonctionnel 
dockeriser l'application
secret github secu
deployer le jeu sur github page si possible 
