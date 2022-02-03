import renderer from 'react-test-renderer';
import MainScreen from '../../../components/MainScreen';
import { MemoryRouter } from 'react-router-dom';

describe('MainScreen component', () => {
	const setSelectedOverrides = jest.fn();
	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(
				<MemoryRouter>
					<MainScreen
						url='cop/'
						overrideList={[
							'Australian Print Receipt',
							'Consolidated Amenities',
							'Event Widget',
							'Insurance Details',
							'Multi Room',
							'No Cancel Button',
							'No Guest Reviews',
							'United Only Points',
						]}
						selectedOverrides={[]}
						setSelectedOverrides={setSelectedOverrides}
					/>
				</MemoryRouter>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
