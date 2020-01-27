const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, isAdult, array, array2} = require('..');

describe('function sum', () => {
    it('should function sum equals 6', () => {
        expect(sum(2,4)).eq(6);
    });

    it('should function sum not equals 0', () => {
        expect(sum(2, 4), 0).not.equal(0);
    });
});

describe ('function mult', ()=>{
    it('should mult equals 8', () => {
        expect(mult(2,4)).eq(8);
    });

    it('should function mult not equals 0', () => {
        expect(mult(2, 4), 0).not.equal(0);
    })
});

describe ('function isAdult', ()=>{
    it('should function isAdult give true if value is greater 18',()=>{
        expect(isAdult(19), true).true;
    });
    it('should function isAdult give false if value is less than 18', ()=>{
        expect(isAdult(11), false).not.true;
    });
    it('should function isAdult give true if value is equal 18', ()=>{
        expect(isAdult(18), true).true;
    });
    it('should function isAdult give false if value is absent', ()=>{
        expect(isAdult(), false).false;
    });
    it('should function isAdult give false if value is negative', ()=>{
        expect(isAdult(-5), false).false;
    });
});

describe('function array',()=>{
    it('should array not be empty', ()=>{
        expect(array([5, 8, 1, 6, 9, 90, 55, 3])).not.empty;
    });
    it('should be array', ()=>{
        expect(array([5, 8, 1, 6, 9, 90, 55, 3])).to.be.an('array');
    });
    it('should initial array is not equal to the actual', ()=>{
        expect(array([5, 8, 1, 6, 9, 90, 55, 3])).ordered.members([1, 3, 5, 6, 8, 9, 55, 90]).not.ordered.members([5, 8, 1, 6, 9, 90, 55, 3]);
    });
});

describe('function array2', ()=>{
    it('should array not be empty', ()=>{
        expect(array2([5, 70, 45, 1, 6, 85, 2])).not.empty;
    });
    it('should be array', ()=>{
        expect(array2([5, 70, 45, 1, 6, 85, 2])).to.be.an('array');
    });
    it('should initial array is not equal to the actual', ()=>{
        expect(array2([5, 70, 45, 1, 6, 85, 2])).ordered.members([85, 70, 45, 6, 5, 2, 1]).not.ordered.members([5, 70, 45, 1, 6, 85, 2]);
    });
})




