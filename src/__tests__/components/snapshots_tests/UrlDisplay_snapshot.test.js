import renderer from 'react-test-renderer';
import UrlDisplay from '../../../components/UI/UrlDisplay';

describe('UrlDisplay component', () => {
	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(
				<UrlDisplay
					url='www.hotels.com'
					selectedOverrides={['some-override', 'another-override']}
				/>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
