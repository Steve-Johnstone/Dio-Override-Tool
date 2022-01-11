import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Footer component', () => {
	const setSelectedOverrides = jest.fn();
	const component = (
		<Footer
			url={'cop/bookingdetails/bookingdetailspage'}
			selectedOverrides={['Already Charged Box', 'No Amenities']}
			setSelectedOverrides={setSelectedOverrides}
		/>
	);

	it('should display the DOM correctly', () => {
		const tree = renderer.create(component).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render the component correctly, based on the props passed to it', () => {
		render(component);

		//Check that the list is rendered
		expect(screen.getByRole('list')).toBeInTheDocument();

		//Check that list includes the selected overrides
		expect(screen.getByText('Already Charged Box')).toBeInTheDocument();
		expect(screen.getByText('No Amenities')).toBeInTheDocument();

		//Check that the url is displayed
		expect(screen.getByTestId('url-display')).toBeInTheDocument();

		//Check that 'Clear All' buttin is displayed
		expect(screen.getByText('Clear All')).toBeInTheDocument();

		//Check that 'Show it' buttin is displayed
		expect(screen.getByText('Show it')).toBeInTheDocument();
	});
});
