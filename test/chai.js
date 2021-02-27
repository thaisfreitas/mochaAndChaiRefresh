const chai = require('chai');

//expect
const expect = chai.expect;
//should
const should = chai.should();
//assert
const assert = chai.assert; //no changing expressions;

let error = null;
should.not.exist(error);

//expect API examples
let num1=1, num2=1;
expect(num1).to.be.equals(num2);
//should --
num1.should.be.equals(num2);
//assert --
assert.equal(num1,num2);

//Objects/Strings/Boolean
function myObject(){
    return {
        a:1,
        b:'Hello'
    }
}

obj1 = new myObject(), obj2 = new myObject();
expect(obj1).to.be.an('object');
expect(obj1).to.be.equals(obj2);
obj2.should.be.equals(obj2);

//deep.equal
expect(obj1).to.be.deep.equals(obj2);
obj1.should.be.deep.equals(obj2);
assert.deepEqual(obj1, obj2);

//chaining expression
// x is an object; y and x are equals
expect(obj1).to.be.an('object').and.to.be.equals(obj2);
obj1.should.be.an('object').and.to.be.equals(obj2);

//Array
let numbers = [0,1,2,3];
expect(numbers).to.be.an('array').that.includes(4);

//Should
(numbers).should.be.an('array').that.includes(3);
assert.isArray(numbers);
