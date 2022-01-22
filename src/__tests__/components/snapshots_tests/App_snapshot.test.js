import renderer from 'react-test-renderer';
import App from '../../../components/App';

describe('App component', () => {
	//It should render the UI correctly
	it('should display the DOM correctly', () => {
		const tree = renderer.create(<App />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
