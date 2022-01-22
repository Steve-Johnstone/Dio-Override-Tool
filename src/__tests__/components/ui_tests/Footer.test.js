import { render, screen } from '@testing-library/react';
import Footer from '../../../components/Footer';

describe('Footer component', () => {
	const setSelectedOverrides = jest.fn();

	it('should render the component correctly, based on the props passed to it', () => {
		render(
			<Footer
				url={'cop/bookingdetails/bookingdetailspage'}
				selectedOverrides={['Already Charged Box', 'No Amenities']}
				setSelectedOverrides={setSelectedOverrides}
			/>
		);

		//Expect the list to be rendered
		expect(screen.getByRole('list')).toBeInTheDocument();

		//Expect it to include the selected overrides
		expect(screen.getByText('Already Charged Box')).toBeInTheDocument();
		expect(screen.getByText('No Amenities')).toBeInTheDocument();

		//Expect the url to be displayed
		expect(screen.getByTestId('url-display')).toBeInTheDocument();

		//Expect the 'Clear All' button to be rendered
		expect(screen.getByText('Clear All')).toBeInTheDocument();

		//Expect the 'Show it' button to be rendered
		expect(screen.getByText('Show it')).toBeInTheDocument();
	});
});
