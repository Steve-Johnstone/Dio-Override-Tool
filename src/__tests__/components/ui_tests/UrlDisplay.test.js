import { render, screen } from '@testing-library/react';
import UrlDisplay from '../../../components/UI/UrlDisplay';

describe('UrlDisplay component', () => {
	it('should render the component correctly, based on the props passed to it', () => {
		render(
			<UrlDisplay
				url='this/is/a/random/url'
				selectedOverrides={['an-override', 'another-override']}
			/>
		);

		//Expect the correct URL to be displayed
		expect(
			screen.getByText(
				'http://localhost:8080/this/is/a/random/url?override=an-override,another-override'
			)
		).toBeInTheDocument();

		//Expect the correct background colour to be displayed
		expect(screen.getByTestId('url-display')).toHaveStyle(
			'background-color: 183,196,208'
		);
	});
});
