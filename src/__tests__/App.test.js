import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../components/App';

describe('App.js', () => {
	it('should display the DOM correctly', () => {
		const tree = renderer.create(<App />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render the main screen correctly', () => {
		render(<App />);

		//Check for Title
		expect(screen.getByText('Dio Override Tool')).toBeInTheDocument();

		//Check for input field
		expect(screen.getByText('Local URL of the page')).toBeInTheDocument();

		//Check for GO button
		expect(screen.getByRole('button', { name: /Go/i })).toBeInTheDocument();
	});
});
