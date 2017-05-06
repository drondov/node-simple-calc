function isNumber(str) {
	return /^\d+(\.\d+)?$/.test(str);
}

module.exports = function lexer(str) {
	return str
		.match(/\d+(\.\d+)?|\+|-|\*|\/|\(|\)/g)
		.map(token => {
			if (isNumber(token)) return parseFloat(token);
			return token;
		});
}