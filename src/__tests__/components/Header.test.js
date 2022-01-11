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

		//Check that the log is rendered
		expect(screen.getByTestId('logo')).toBeInTheDocument();

		//Check that title is rendered
		expect(screen.getByText('Dio Override Tool')).toBeInTheDocument();
	});
});
