import renderer from 'react-test-renderer';
import SearchBar from '../../../components/UI/SearchBar';

describe('SearchBar component', () => {
	const setSearchTerm = jest.fn();

	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(<SearchBar setSearchTerm={setSearchTerm} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
