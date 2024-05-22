//your JS code here. If required.

function mapLetters(str) {
const obj = {};

for (let i = 0; i < str.length; i++) {
	const char = str[i];

	if (/[a-z]/.test(char)) {
		if (!obj(char)) {
			obj[char] = [];
		}
	}
}
	 return obj;
}