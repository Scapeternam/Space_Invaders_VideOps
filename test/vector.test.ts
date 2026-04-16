import { describe, it, expect } from 'vitest';
import { normalize, dot, add, subtract } from '../src/ts/math/vector';

// --- Tests fournis par le PDF ---
describe('normalize', () => {
    it('normalize({x:5,y:50})', () => {
        const result = normalize({ x: 5, y: 50 });
        expect(result.x).toBeCloseTo(0.09950371902099892);
        expect(result.y).toBeCloseTo(0.9950371902099892);
    });
});

describe('dot', () => {
    it('dot({x:5,y:50},{x:10,y:100}) returns 5050', () => {
        expect(dot({ x: 5, y: 50 }, { x: 10, y: 100 })).toBe(5050);
    });
});

describe('add', () => {
    it('add({x:5,y:50},{x:10,y:100}) returns {x:15,y:150}', () => {
        expect(add({ x: 5, y: 50 }, { x: 10, y: 100 })).toEqual({ x: 15, y: 150 });
    });
});

describe('subtract', () => {
    it('subtract({x:5,y:50},{x:10,y:100}) returns {x:-5,y:-50}', () => {
        expect(subtract({ x: 5, y: 50 }, { x: 10, y: 100 })).toEqual({ x: -5, y: -50 });
    });
});

// --- Tests supplémentaires ---
describe('add - cas limites', () => {
    it('additionner avec des zéros', () => {
        expect(add({ x: 0, y: 0 }, { x: 5, y: 5 })).toEqual({ x: 5, y: 5 });
    });
    it('additionner des négatifs', () => {
        expect(add({ x: -5, y: -5 }, { x: 5, y: 5 })).toEqual({ x: 0, y: 0 });
    });
});