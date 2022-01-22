import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header';

describe('Header component', () => {
	it('should render the component correctly', () => {
		render(<Header />);

		//Expect the logo to be displayed
		expect(screen.getByTestId('logo')).toBeInTheDocument();

		//Expect the title to be displayed
		expect(screen.getByText('Dio Override Tool')).toBeInTheDocument();
	});
});
