const getSum = require('./1');
const arithmetic = require('./2')
const checkNumber = require('./3');

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
    });
    test('should not return strings', ()=>{
        expect(getSum(arr)).not.toContain(/^[A-ZА-ЯЁ]$/i);
    });
});

describe ('arithmetic function', () => {
    let a = 7;
    let b = 5;
    let operator1 = 'add';
    let operator2 = 'subtract'
    let operator3 = 'multiply'
    let operator4 = 'divide'
    test('should add numbers correctly', ()=>{
        expect(arithmetic(a, b, operator1)).toBe(12);
        expect(arithmetic(a, b, operator1)).not.toBe(75);
    });
    test('should subtract numbers correctly', ()=>{
        expect(arithmetic(a,b,operator2)).toBe(2);
        expect(arithmetic(a,b,operator2)).toBeLessThan(3);
    });
    test('should multiply numbers corectly', ()=>{
        expect(arithmetic(a,b,operator3)).toBe(35);
        expect(arithmetic(a,b,operator3)).toBeGreaterThan(34);
    });
    test('should divide numbers correctly', ()=>{
        expect(arithmetic(a,b,operator4)).toBe(1.4);
        expect(arithmetic(a, b, operator4)).toBeCloseTo(1.399);
    });
    test('shoud return defined results', ()=>{
        expect(arithmetic(a, b, operator1)).toBeDefined();
        expect(arithmetic(a, b, operator2)).toBeDefined();
        expect(arithmetic(a, b, operator3)).toBeDefined();
        expect(arithmetic(a, b, operator4)).toBeDefined();
        expect(arithmetic()).not.toBeUndefined();
    });
    
});

describe ('checkNumber function', ()=>{
    const num1 = 8;
    const num2 = 7;
    test('should be truthy for even numbers', ()=>{
        expect(checkNumber(num1)).toBeTruthy();
        expect(checkNumber(num1)).not.toBeFalsy();
    });
    test('should be falsy for odd numbers', ()=>{
        expect(checkNumber(num2)).toBeFalsy();
        expect(checkNumber(num2)).not.toBeTruthy();
    });
    test('should return a defined value', ()=>{
        expect(checkNumber(num1)).toBeDefined();
        expect(checkNumber(num2)).not.toBeUndefined();
    });
    test('should calculate remainder corerctly', ()=>{
        expect(checkNumber(num1)).toBe(true);
        expect(checkNumber(num2)).toBe(false);
    });
    test('should return a boolean value', ()=>{
        expect(checkNumber(num1)).toStrictEqual(true);
        expect(checkNumber(num2)).toStrictEqual(false);
    });
});