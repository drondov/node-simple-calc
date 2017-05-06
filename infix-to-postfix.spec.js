const { expect } = require('chai');
const infixToPostfix = require('./infix-to-postfix');

describe('infix to postfix translator', () => {
	it('Simple expression test', () => {
		const input = ['(', 334, '+', 54, ')', '/', 51, '*', 2.2, '/', 4, '-', 98];
		const actual = infixToPostfix(input);
		const expected = [334, 54, '+', 51, '/', 2.2, '*', 4, '/', 98, '-'];
		expect(actual).to.be.deep.equal(expected);
	});

	it('Second expression test', () => {
		const input = [1, '+', 1, '-', 14, '*', 9];
		const actual = infixToPostfix(input);
		const expected = [1, 1, '+', 14, 9, '*', '-'];
		expect(actual).to.be.deep.equal(expected);
	});
});