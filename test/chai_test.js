const chai = require('chai');
const should = chai.should();

//Chai configuration
// chai.config.showDiff=false // turn off the diff display
// chai.config.includeStack=true; //turn on the stack trace
// chai.config.truncateThreshold=0; //disable truncating

describe('objects', function () {
    it('should equal', function (){
        var arrayTest1 = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 3
                }
            }
        };
        var arrayTest2 = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 3
                }
            }
        };
        arrayTest1.should.be.deep.equals(arrayTest2);
    });
});
