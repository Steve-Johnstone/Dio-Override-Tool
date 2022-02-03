import renderer from 'react-test-renderer';
import OverrideList from '../../../components/UI/OverrideList';

describe('OverrideList component', () => {
	const handleClick = jest.fn();

	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(
				<OverrideList
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
					searchTerm='searching'
					selectedOverrides={[
						'Australian Print Receipt',
						'Consolidated Amenities',
					]}
					handleClick={handleClick}
				/>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
