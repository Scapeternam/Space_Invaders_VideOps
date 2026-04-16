import { describe, it, expect } from 'vitest';
import {distance, PolarVector, toVector} from '../src/ts/math/polar-vector';


describe('distance', () => {
    it('distance(angle:5 r:50, angle:10 r:100) returns 98.30', () => {
        expect(
            distance({ angle: 5, radius: 50 }, { angle: 10, radius: 100 })
        ).toBeCloseTo(98.30248290540649);
    });
    it('distance(angle:5 r:50, angle:-10 r:100) returns 141.76', () => {
        expect(
            distance({ angle: 5, radius: 50 }, { angle: -10, radius: 100 })
        ).toBeCloseTo(141.76346189546945);
    });
});

describe('toVector', () => {
    it('toVector(angle:5 r:50, angle:10 r:100)', (polarVector: PolarVector) => {
        const result = toVector({angle: 5, radius: 50}, {angle: 10, radius: 100});
        expect(result.x).toBeCloseTo(14.183109273161312);
        expect(result.y).toBeCloseTo(-47.946213733156924);
    });
});