export function buildUrl(url, selectedOverrides) {
	const overrideString = selectedOverrides.join(',');

	return `localhost:8080/${url}?override=${overrideString}`;
}
