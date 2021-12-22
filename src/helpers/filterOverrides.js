import { checkName } from './checkName';

export function filterOverrides(override, searchTerm) {
	let trimmedSearchTerm = searchTerm.replaceAll(' ', '');
	let str = trimmedSearchTerm.toLowerCase().substring(0, 10);
	let overrideSub = override.substring(0, 10).toLowerCase();

	return override.toLowerCase().includes(str) || checkName(overrideSub, str);
}
