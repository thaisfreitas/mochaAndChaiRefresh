// Test Suit Mathematical Operations

// Tests Cases
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

var assert = require('assert');

describe('Mathematical Operations - Test Suit ', function (){

    let number1 = 10;
    let number2 = 10;

    it('Additon of two numbers ', function () {
        let result = number1+number2;
        assert.equal(result, 20)
    });

    it('Subtraction of two numbers ', function () {
        let result = number1-number2;
        assert.equal(result, 0)
    });

    it('Multiplication of two numbers ', function () {
        let result = number1*number2;
        assert.equal(result, 100)
    });

    it('Division of two numbers ', function () {
        let result = number1/number2;
        assert.equal(result, 1)
    });

    it('This is a Pending Function feature');

});