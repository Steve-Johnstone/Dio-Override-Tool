function checkName(name, str) {
	const pattern = str
		.split('')
		.map((x) => {
			return `(?=.*${x})`;
		})
		.join('');
	const regex = new RegExp(`${pattern}`, 'g');
	return name.match(regex);
}

export function filterOverrides(override, searchTerm) {
	const searchString = searchTerm.replaceAll(' ', '').toLowerCase();
	const overrideString = override.replaceAll('-', '');

	if (
		overrideString.includes(searchString) ||
		checkName(overrideString.substring(0, 7), searchString.substring(0, 7))
	) {
		return true;
	}
	return false;
}
