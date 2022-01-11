import { render, screen, within } from '@testing-library/react';
import renderer from 'react-test-renderer';
import OverrideDisplay from '../../components/OverrideDisplay';
import { MemoryRouter } from 'react-router-dom';

describe('OverrideDisplay component', () => {
	const component = (
		<MemoryRouter>
			<OverrideDisplay
				url=''
				overrideList={[
					'Australian Print Receipt',
					'Consolidated Amenities',
					'Event Widget',
					'Insurance Details',
					'Multi Room',
					'No Cancel Button',
					'No Guest Reviews',
					'United Only Points',
				]}
			/>
		</MemoryRouter>
	);

	it('should display the DOM correctly', () => {
		const tree = renderer.create(component).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render the component correctly, based on the props passed to it', () => {
		render(component);

		//Check that the overridelist is rendered
		const list = screen.getByTestId('override-list');
		expect(list).toBeInTheDocument();

		//Check that the list contains 8 items
		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(8);

		//Check that list includes the selected overrides
		expect(screen.getByText('Australian Print Receipt')).toBeInTheDocument();
		expect(screen.getByText('No Cancel Button')).toBeInTheDocument();
	});
});
