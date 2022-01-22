import renderer from 'react-test-renderer';
import Footer from '../../../components/Footer';

describe('Footer component', () => {
	const setSelectedOverrides = jest.fn();

	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(
				<Footer
					url={'cop/bookingdetails/bookingdetailspage'}
					selectedOverrides={['Already Charged Box', 'No Amenities']}
					setSelectedOverrides={setSelectedOverrides}
				/>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
