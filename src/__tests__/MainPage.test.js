import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MainPage from '../components/MainPage';
import { MemoryRouter } from 'react-router-dom';

describe('Override Display', () => {
	it('should display the DOM correctly', () => {
		const { setUrl, setOverrideList } = jest.fn();

		const tree = renderer
			.create(
				<MemoryRouter>
					<MainPage url='' setUrl={setUrl} setOverrideList={setOverrideList} />
				</MemoryRouter>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
