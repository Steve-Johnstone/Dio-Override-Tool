import renderer from 'react-test-renderer';
import OpeningScreen from '../../../components/OpeningScreen';
import { MemoryRouter } from 'react-router-dom';

describe('OpeningScreen component', () => {
	const { setUrl, setOverrideList } = jest.fn();

	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(
				<MemoryRouter>
					<OpeningScreen
						url=''
						setUrl={setUrl}
						setOverrideList={setOverrideList}
					/>
				</MemoryRouter>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
