import { render, screen } from '@testing-library/react';
import OverrideItem from '../../../components/UI/OverrideItem';

describe('OverrideItem component', () => {
	const handleClick = jest.fn();

	it('should render the component correctly, based on the props passed to it', () => {
		render(
			<OverrideItem
				override='homeaway'
				selectedOverrides={['multi-room', 'homeaway']}
				handleClick={handleClick}
			/>
		);

		//Expect the override name to be displayed
		expect(screen.getByText('Homeaway')).toBeInTheDocument();

		//Expect background colour to be highlighted, as override is currently selected
		expect(screen.getByText('Homeaway')).toHaveStyle(
			'background-color: 254,253,202'
		);
	});
});
