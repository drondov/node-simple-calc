const { expect } = require('chai');

const lexer = require('./lexer');

describe('Lexer', () => {
	it('Simple expression test', () => {
		const actual = lexer('(334 + 54) / 51 * 2.2 / 4 - 98');
		const expected = ['(', 334, '+', 54, ')', '/', 51, '*', 2.2, '/', 4, '-', 98];
		expect(actual).to.deep.equal(expected);
	});
});