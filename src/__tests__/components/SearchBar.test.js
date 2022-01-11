import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchBar from '../../components/SearchBar';

describe('SearchBar component', () => {
	const setSearchTerm = jest.fn();
	const component = <SearchBar setSearchTerm={setSearchTerm} />;

	it('should display the DOM correctly', () => {
		const tree = renderer.create(component).toJSON();

		expect(tree).toMatchSnapshot();
	});
	it('should render the component correctly, based on the props passed to it', () => {
		render(component);

		//Check that icon is displayed
		expect(screen.getByTestId('search-icon')).toBeInTheDocument();

		//Check that the input field is rendered
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});
});
