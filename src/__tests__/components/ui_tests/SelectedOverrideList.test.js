import { render, screen, within } from '@testing-library/react';
import SelectedOverrideList from '../../../components/UI/SelectedOverrideList';

describe('SelectedOverrideList component', () => {
	const onClick = jest.fn();

	it('should render the component correctly, based on the props passed to it', () => {
		render(
			<SelectedOverrideList
				selectedOverrides={[
					'first-override',
					'second-override',
					'third-override',
				]}
				onClick={onClick}
			/>
		);

		//Expect the selcted override list to be rendered
		const list = screen.getByRole('list');
		expect(list).toBeInTheDocument();

		//Expect the list to contain 3 items
		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(3);

		//Expect the list to include the selected overrides
		expect(screen.getByText('first-override')).toBeInTheDocument();
		expect(screen.getByText('second-override')).toBeInTheDocument();
		expect(screen.getByText('third-override')).toBeInTheDocument();
	});
});
