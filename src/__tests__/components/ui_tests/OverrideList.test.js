import { render, screen } from '@testing-library/react';
import OverrideList from '../../../components/UI/OverrideList';

describe('OverrideList component', () => {
	const handleClick = jest.fn();

	it('should render the component correctly, based on the props passed to it', () => {
		render(
			<OverrideList
				overrideList={[
					'first-override',
					'second-override',
					'third-override',
					'fourth-override',
				]}
				searchTerm='first'
				selectedOverrides={['fourth-override']}
				handleClick={handleClick}
			/>
		);

		//Expect the matching override to be displayed
		expect(screen.getByText('First Override')).toBeInTheDocument();

		//Expect the non-matching overrides NOT to be displayed
		expect(screen.queryByText('Second Override')).not.toBeInTheDocument();
	});
});
