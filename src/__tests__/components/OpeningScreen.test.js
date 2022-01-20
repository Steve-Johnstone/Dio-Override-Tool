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

		//Expect the input field to be displayed
		expect(screen.getByText('Local URL of the page')).toBeInTheDocument();

		//Expect the 'Go' button to be rendered
		expect(screen.getByRole('button', { name: /Go/i })).toBeInTheDocument();
	});
});
