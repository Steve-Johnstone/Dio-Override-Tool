import renderer from 'react-test-renderer';
import Button from '../../../components/UI/Button';

describe('Button component', () => {
	const onClick = jest.fn();

	it('should display the DOM correctly', () => {
		const tree = renderer
			.create(
				<Button
					className='is-info'
					name='copy-button'
					id='copy-button'
					text='Copy the URL'
					onClick={onClick}
					// icon={{}}
				/>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
