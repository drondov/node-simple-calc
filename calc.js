const lexer = require('./lexer');
const infixToPostfix = require('./infix-to-postfix');
const evaluate = require('./evaluate');

module.exports = function calc(str) {
	const tokens = lexer(str);
	const postfix = infixToPostfix(tokens);
	const result = evaluate(postfix);

	return result;
}