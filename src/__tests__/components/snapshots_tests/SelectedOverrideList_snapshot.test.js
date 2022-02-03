import renderer from 'react-test-renderer';
import SelectedOverrideList from '../../../components/UI/SelectedOverrideList';

describe('SelectedOverrideList component', () => {
	const onClick = jest.fn();

	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(
				<SelectedOverrideList
					selectedOverrides={['an-override', 'second-override']}
					onClick={onClick}
				/>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
