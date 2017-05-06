const priorityTable = {
	'*': 2,
	'/': 2,
	'+': 1,
	'-': 1,
	'(': 0,
}; 

function tail(stack) {
	return stack[stack.length - 1];
}

function getPriority(token) {
	const priority = priorityTable[token];
	if (typeof priority === 'undefined') {
		throw new Error('Undefined token ' + token);
	}
	return priority;
}

module.exports = function translate(tokens) {
	const result = [];
	const stack = [];
	for (let i = 0; i < tokens.length; ++i) {
		const current = tokens[i];
		if (typeof current === 'number') {
			result.push(current);
			continue;
		}
		if (current === '(') {
			stack.push('(');
			continue;
		}
		if (current === ')') {
			let fromStack = null;
			while ((fromStack = stack.pop()) !== '(') {
				result.push(fromStack)
			}
			continue;
		}
		while (stack.length && getPriority(tail(stack)) >= getPriority(current)) {
			result.push(stack.pop());
		}
		stack.push(current);
	}
	result.push(...stack);
	return result;
}