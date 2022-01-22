import { buildUrl } from '../../helpers/buildUrl';

describe('buildUrl function', () => {
	it.each([
		[
			'cop/bookingform/booking',
			['no-amenities', 'affiliate-avios', 'guest-reviews'],
			'http://localhost:8080/cop/bookingForm/booking?override=no-amenities,affiliate-avios,guest-reviews',
		],
		[
			'cop/bookingdetails/bookingdetailspage',
			['insurance-details', 'no-billing-address'],
			'http://localhost:8080/cop/bookingDetails/bookingDetailsPage?override=insurance-details,no-billing-address',
		],
		[
			'cop/cancellation/cancellationconfirmation',
			['covid-refund-latency', 'multi-room', 'partner-loyalty'],
			'http://localhost:8080/cop/cancellation/cancellationconfirmation?override=covid-refund-latency,multi-room,partner-loyalty',
		],
		[
			'cop/orderchange/changeform',
			['error-all-rooms', 'refund-or-no-payment', 'with-cpf'],
			'http://localhost:8080/cop/orderChange/changeForm?override=error-all-rooms,refund-or-no-payment,with-cpf',
		],
	])(
		'should build the correct url based on the parameters passed to it',
		(path, overrides, url) => {
			expect(buildUrl(path, overrides)).toBe(url);
		}
	);
});
