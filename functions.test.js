const functions = require('./functions')

test('returnTwo should return 2', () => {
    expect(functions.returnTwo()).toBe(2)
})

test('Greeting should properly return a greeting', () => {
    expect(functions.greeting('Jill')).toBe('Hello, Jill.')
    expect(functions.greeting('James')).toBe('Hello, James.')
})

describe('Math Functions', () => {
    test('Add should add two values together', () => {
        expect(functions.add(2, 3)).toBe(5)
        expect(functions.add(4, 5)).toBe(9)
    })
    
    test('Divide should divide two values together', () => {
        expect(functions.divide(6, 2)).toBe(3)
        expect(functions.divide(10, 2)).toBe(5)
    })
    
    test('Subtract should subtract two values together', () => {
        expect(functions.subtract(4, 3)).toBe(1)
        expect(functions.subtract(9, 5)).toBe(4)
    })
    
    test('Multiply should multiply two values together', () => {
        expect(functions.multiply(1, 2)).toBe(2)
        expect(functions.multiply(10, 2)).toBe(20)
    })
})