import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchBar from '../../components/SearchBar';

describe('SearchBar component', () => {
	it('should display the DOM correctly', () => {
		const setSearchTerm = jest.fn();

		const tree = renderer
			.create(<SearchBar setSearchTerm={setSearchTerm} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
