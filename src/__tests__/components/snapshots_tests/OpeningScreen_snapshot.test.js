import renderer from 'react-test-renderer';
import OpeningScreen from '../../../components/OpeningScreen';
import { MemoryRouter } from 'react-router-dom';

describe('OpeningScreen component', () => {
	const { setUrl, setOverrideList, setSelectedOverrides } = jest.fn();

	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(
				<MemoryRouter>
					<OpeningScreen
						setUrl={setUrl}
						setOverrideList={setOverrideList}
						setSelectedOverrides={setSelectedOverrides}
					/>
				</MemoryRouter>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
