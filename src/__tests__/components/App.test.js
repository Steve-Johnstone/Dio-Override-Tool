import renderer from 'react-test-renderer';
import App from '../../components/App';

describe('App component', () => {
	it('should display the DOM correctly', () => {
		const tree = renderer.create(<App />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
