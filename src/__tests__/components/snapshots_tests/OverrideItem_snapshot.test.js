import renderer from 'react-test-renderer';
import OverrideItem from '../../../components/UI/OverrideItem';

describe('OverrideItem component', () => {
	const handleClick = jest.fn();

	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(
				<OverrideItem
					override='homeaway'
					selectedOverrides={['multi-room', 'homeaway']}
					handleClick={handleClick}
				/>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
