export function checkName(name, str) {
	let pattern = str
		.split('')
		.map((x) => {
			return `(?=.*${x})`;
		})
		.join('');
	let regex = new RegExp(`${pattern}`, 'g');
	return name.match(regex);
}
