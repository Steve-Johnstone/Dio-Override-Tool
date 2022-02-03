import renderer from 'react-test-renderer';
import ErrorDisplay from '../../../components/UI/ErrorDisplay';

describe('ErrorDisplay component', () => {
	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(<ErrorDisplay error='this is an error message' />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
