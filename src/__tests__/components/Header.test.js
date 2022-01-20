import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../../components/Header';

describe('Header component', () => {
	it('should display the DOM correctly', () => {
		const tree = renderer.create(<Header />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render the component correctly', () => {
		render(<Header />);

		//Expect the logo to be displayed
		expect(screen.getByTestId('logo')).toBeInTheDocument();

		//Expect the title to be displayed
		expect(screen.getByText('Dio Override Tool')).toBeInTheDocument();
	});
});
