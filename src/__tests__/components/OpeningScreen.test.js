import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import OpeningScreen from '../../components/OpeningScreen';
import { MemoryRouter } from 'react-router-dom';

describe('OpeningScreen component', () => {
	const { setUrl, setOverrideList } = jest.fn();
	const component = (
		<MemoryRouter>
			<OpeningScreen url='' setUrl={setUrl} setOverrideList={setOverrideList} />
		</MemoryRouter>
	);

	it('should display the DOM correctly', () => {
		const tree = renderer.create(component).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render the opening screen correctly', () => {
		render(component);

		//Check for input field
		expect(screen.getByText('Local URL of the page')).toBeInTheDocument();

		//Check for GO button
		expect(screen.getByRole('button', { name: /Go/i })).toBeInTheDocument();
	});
});
