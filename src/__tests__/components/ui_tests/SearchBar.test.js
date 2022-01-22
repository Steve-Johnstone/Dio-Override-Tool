import { render, screen } from '@testing-library/react';
import SearchBar from '../../../components/SearchBar';

describe('SearchBar component', () => {
	const setSearchTerm = jest.fn();

	it('should render the component correctly, based on the props passed to it', () => {
		render(<SearchBar setSearchTerm={setSearchTerm} />);

		//Expect the icon to be displayed
		expect(screen.getByTestId('search-icon')).toBeInTheDocument();

		//Expect the input field to be displayed
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});
});
