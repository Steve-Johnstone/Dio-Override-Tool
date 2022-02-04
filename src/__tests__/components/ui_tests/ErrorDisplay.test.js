import { render, screen } from '@testing-library/react';
import ErrorDisplay from '../../../components/UI/ErrorDisplay';

describe('ErrorDisplay component', () => {
	it('should render the component correctly, based on the props passed to it', () => {
		render(<ErrorDisplay error='error message' />);

		//Expect the text of the error message to be displayed
		expect(screen.getByText('error message')).toBeInTheDocument();

		//Expect text colour to be red
		expect(screen.getByText('error message')).toHaveStyle('color: 204,15,53');
	});
});
