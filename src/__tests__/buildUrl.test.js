import { buildUrl } from '../helpers/buildUrl';

describe('buildUrl function', () => {
	it.each([
		[
			'bookingform/booking',
			['no-amenities', 'affiliate-avios', 'guest-reviews'],
			'localhost:8080/bookingform/booking?override=no-amenities,affiliate-avios,guest-reviews',
		],
		[
			'bookingdetails/bookingdetailspage',
			['insurance-details', 'no-billing-address'],
			'localhost:8080/bookingdetails/bookingdetailspage?override=insurance-details,no-billing-address',
		],
		[
			'cop/cancellation/cancellationconfirmation',
			['covid-refund-latency', 'multi-room', 'partner-loyalty'],
			'localhost:8080/cop/cancellation/cancellationconfirmation?override=covid-refund-latency,multi-room,partner-loyalty',
		],
		[
			'cop/orderchange/changeform',
			['error-all-rooms', 'refund-or-no-payment', 'with-cpf'],
			'localhost:8080/cop/orderchange/changeform?override=error-all-rooms,refund-or-no-payment,with-cpf',
		],
	])(
		'should build the correct url based on the parameters passed to it',
		(path, overrides, url) => {
			expect(buildUrl(path, overrides)).toBe(url);
		}
	);
});
