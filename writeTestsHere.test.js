const getSum = require('./1');

describe('getSum function',() => {
    const arr = [1, 2, 3];
    const arr2 = [0.1, 0.2, 0.3];
    test('should return the sum of all the elements in an array', () => {
        expect(getSum(arr)).toBe(6);
        expect(getSum(arr)).not.toBe(3);
        expect(getSum(arr)).toEqual(6);
    });

    test('should sum float values correctly',()=>{
        expect(getSum(arr2)).toBeCloseTo(0.6);
        expect(getSum(arr2)).not.toBeCloseTo(0.7);
    });

    test('should not return undefined',()=>{
        expect(getSum(arr)).toBeDefined();
        expect(getSum(arr)).not.toBeUndefined();
    });

    test('should compare to other values correctly', ()=>{
        expect(getSum(arr)).toBeGreaterThan(arr[1]);
        expect(getSum(arr2)).toBeGreaterThanOrEqual(0.6);
        expect(getSum(arr2)).toBeLessThanOrEqual(0.65);
    })
    test('should not return strings', ()=>{
        expect(getSum(arr)).not.toContain(/^[A-ZА-ЯЁ]$/i);
    })
})

