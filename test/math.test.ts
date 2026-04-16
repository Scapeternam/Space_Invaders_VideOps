import { describe, it, expect } from 'vitest';
import { clamp, lerp } from '../src/ts/math/math';

// --- Tests fournis par le PDF ---
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
    it('lerp(1,10,-12) returns -107', () => {
        expect(lerp(1, 10, -12)).toBe(-107);
    });
});

// --- 5 tests supplémentaires ---
describe('clamp - cas limites', () => {
    it('retourne max si valeur trop haute', () => {
        expect(clamp(1, 10, 99)).toBe(10);
    });
    it('retourne la valeur si exactement sur le min', () => {
        expect(clamp(5, 10, 5)).toBe(5);
    });
    it('retourne la valeur si exactement sur le max', () => {
        expect(clamp(5, 10, 10)).toBe(10);
    });
});

describe('lerp - cas limites', () => {
    it('retourne start si v=0', () => {
        expect(lerp(1, 10, 0)).toBe(1);
    });
    it('retourne end si v=1', () => {
        expect(lerp(1, 10, 1)).toBe(10);
    });
});