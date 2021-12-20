import { formatOverrides } from '../helpers/formatOverrides';

describe('formatOverrides function', () => {
	it('should replace the dash between words with a space and also capitalise the first letter of each word', () => {
		expect(formatOverrides('this-is-an-override')).toBe('This Is An Override');
	});
});
