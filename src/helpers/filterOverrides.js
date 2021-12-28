function checkName(name, str) {
	let pattern = str
		.split('')
		.map((x) => {
			return `(?=.*${x})`;
		})
		.join('');
	let regex = new RegExp(`${pattern}`, 'g');
	return name.match(regex);
}

export function filterOverrides(override, searchTerm) {
	let searchString = searchTerm.replaceAll(' ', '').toLowerCase();
	let overrideString = override.replaceAll('-', '');

	if (
		overrideString.includes(searchString) ||
		checkName(overrideString.substring(0, 7), searchString.substring(0, 7))
	) {
		return true;
	}
	return false;
}
