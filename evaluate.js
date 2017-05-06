module.exports = function(tokens) {
	const stack = [];
	for (let i = 0; i < tokens.length; ++i) {
		const current = tokens[i];
		if (typeof current === 'number') {
			stack.push(current);
			continue;
		}
		const b = stack.pop();
		const a = stack.pop();

		if (current === '+') stack.push(a + b);
		if (current === '-') stack.push(a - b);
		if (current === '*') stack.push(a * b);
		if (current === '/') stack.push(a / b);
	}
	return stack.pop();
}