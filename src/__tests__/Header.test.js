import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Override Display', () => {
	it('should display the DOM correctly', () => {
		const setSearchTerm = jest.fn();
		const tree = renderer
			.create(<Header setSearchTerm={setSearchTerm} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
