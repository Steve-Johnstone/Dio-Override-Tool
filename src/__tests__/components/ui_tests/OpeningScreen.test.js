import { render, screen } from '@testing-library/react';
import OpeningScreen from '../../../components/Pages/OpeningScreen';
import { MemoryRouter } from 'react-router-dom';

describe('OpeningScreen component', () => {
	const { setUrl, setOverrideList, setSelectedOverrides } = jest.fn();

	it('should render the opening screen correctly', () => {
		render(
			<MemoryRouter>
				<OpeningScreen
					url='cop/bookingdetails/bookingdetailspage'
					setUrl={setUrl}
					setOverrideList={setOverrideList}
					setSelectedOverrides={setSelectedOverrides}
				/>
			</MemoryRouter>
		);

		//Expect the input field to be displayed
		expect(screen.getByText('Local URL of the page')).toBeInTheDocument();

		//Expect the 'Go' button to be rendered
		expect(screen.getByRole('button', { name: /Go/i })).toBeInTheDocument();
	});
});
