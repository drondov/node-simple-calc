const { expect } = require('chai');

const calc = require('./calc');

describe('calc', () => {
	it('Simple expression test', () => {
		const actual = Math.floor(calc('(334 + 54) / 51 * 2.2 / 4 - 98'));
		const expected = -94;
		expect(actual).to.be.equal(expected);
	});

	it('Second simple test', () => {
		const actual = Math.floor(calc('1 + 1 - 14 * 9'));
		const expected = -124;
		expect(actual).to.be.equal(expected);
	});


});