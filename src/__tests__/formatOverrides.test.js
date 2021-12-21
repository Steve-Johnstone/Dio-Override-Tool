import { formatOverrides } from '../helpers/formatOverrides';

describe('formatOverrides function', () => {
	it.each([
		['has-swimming-pool', 'Has Swimming Pool'],
		['is-gold-member', 'Is Gold Member'],
		['has-no-amenities', 'Has No Amenities'],
		['no-loyalty-rewards', 'No Loyalty Rewards'],
	])(
		'should replace the dash between words with a space and also capitalise the first letter of each word',
		(override, formattedOverride) => {
			expect(formatOverrides(override)).toBe(formattedOverride);
		}
	);
});
