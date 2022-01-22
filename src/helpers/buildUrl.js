export function buildUrl(url, selectedOverrides) {
	const overrideString = selectedOverrides.join(',');
	let convertedUrl = '';

	switch (url) {
		case 'cop/bookingdetails/bookingdetailspage':
			convertedUrl = 'cop/bookingDetails/bookingDetailsPage';
			break;
		case 'cop/bookingform/booking':
			convertedUrl = 'cop/bookingForm/booking';
			break;
		case 'cop/orderchange/changeform':
			convertedUrl = 'cop/orderChange/changeForm';
			break;
		default:
			convertedUrl = url;
	}
	return `http://localhost:8080/${convertedUrl}?override=${overrideString}`;
}
