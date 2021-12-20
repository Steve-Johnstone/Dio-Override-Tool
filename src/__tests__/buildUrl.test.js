import { buildUrl } from '../helpers/buildUrl';

describe('buildUrl function', () => {
	it('should build the correct url based on the parameters passed to it', () => {
		const url = 'bookingform/bookingpage';
		const overrides = ['no-amenities', 'no-amenities', 'guest-reviews'];
		expect(buildUrl(url, overrides)).toBe(
			'localhost:8080/bookingform/bookingpage?override=no-amenities,no-amenities,guest-reviews'
		);
	});
});
