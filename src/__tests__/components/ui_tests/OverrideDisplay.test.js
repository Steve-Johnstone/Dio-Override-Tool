import { render, screen, within } from '@testing-library/react';
import MainScreen from '../../../components/MainScreen';
import { MemoryRouter } from 'react-router-dom';

describe('MainScreen component', () => {
	const setSelectedOverrides = jest.fn();

	it('should render the component correctly, based on the props passed to it', () => {
		render(
			<MemoryRouter>
				<MainScreen
					url='cop/bookingDetails/bookingDetailsPage'
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
					selectedOverrides={[]}
					setSelectedOverrides={setSelectedOverrides}
				/>
			</MemoryRouter>
		);

		//Expect the overridelist to be rendered
		const list = screen.getByTestId('override-list');
		expect(list).toBeInTheDocument();

		//Expect the list to contain 8 items
		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(8);

		//Expect the list to include the selected overrides
		expect(screen.getByText('Australian Print Receipt')).toBeInTheDocument();
		expect(screen.getByText('No Cancel Button')).toBeInTheDocument();
	});
});
