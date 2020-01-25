const assert = require('assert');
const {sum, mult} = require('..');

describe('function sum', () => {
    it('should function sum equals 6', () => {
        assert.equal(sum(2, 4), 6);
    })

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2, 4), 0);
    })
})


it('should mult equals 8', () => {
    assert.equal(mult(2, 4), 8)
})