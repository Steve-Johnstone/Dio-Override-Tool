import { render, screen } from '@testing-library/react';
import Button from '../../../components/UI/Button';

describe('Button component', () => {
	const onClick = jest.fn();

	it('should render the component correctly, based on the props passed to it', () => {
		render(
			<Button
				className='is-info'
				name='copy-button'
				id='copy-button'
				text='Copy URL'
				onClick={onClick}
			/>
		);

		//Expect a button to be displayed
		expect(screen.getByRole('button')).toBeInTheDocument();

		//Expect the text of the button to be displayed
		expect(screen.getByText('Copy URL')).toBeInTheDocument();
	});
});
