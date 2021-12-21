import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

describe('Override Display', () => {
	it('should display the DOM correctly', () => {
		const setSelectedOverrides = jest.fn();
		const tree = renderer
			.create(
				<Footer
					url={''}
					selectedOverrides={[]}
					setSelectedOverrides={setSelectedOverrides}
				/>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
