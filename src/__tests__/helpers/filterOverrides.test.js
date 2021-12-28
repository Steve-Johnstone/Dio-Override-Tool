import { filterOverrides } from '../../helpers/filterOverrides';

describe('filterOverrides function', () => {
	it.each([
		['change-popup-with-phone', 'change'],
		['insurance-details-cancelled', 'insurance details'],
		['no-check-in-instructions', 'no check in'],
		['thai-cash-pending', 'thai'],
	])(
		'should return true if the override includes the search term, exactly as it appears in the override',
		(override, searchTerm) => {
			expect(filterOverrides(override, searchTerm)).toBe(true);
		}
	);
	it.each([
		['already-charged-box', 'chArged'],
		['resend-email-failure', 'FAILURE'],
		['earn-loyalty-message', 'lOyAlTy'],
		['thai-cash-pending', 'caSH'],
	])(
		'should return true if the override includes the search term, regardless of whether it is upper or lower case',
		(override, searchTerm) => {
			expect(filterOverrides(override, searchTerm)).toBe(true);
		}
	);
	it.each([
		['no-print-receipt', 'On tripn'],
		['united-only-points', 'Nuited'],
		['multiple-payments', 'ultiple'],
		['change-redirect', 'Chnage'],
	])(
		'should return true if the beginning of the search term is mis-spelt but still contains the same letters as the start of the override name',
		(override, searchTerm) => {
			expect(filterOverrides(override, searchTerm)).toBe(true);
		}
	);

	it.each([
		['conf-hero-cruise-price', 'Loyalty'],
		['text-to-download-error', 'Coupon'],
		['newsletter-non-eligible', 'Event'],
		['refer-a-friend', 'Signup'],
	])(
		'should return false if the override does not include the search term',
		(override, searchTerm) => {
			expect(filterOverrides(override, searchTerm)).toBe(false);
		}
	);
});
