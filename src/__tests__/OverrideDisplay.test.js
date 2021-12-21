import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import OverrideDisplay from '../components/OverrideDisplay';
import { MemoryRouter } from 'react-router-dom';

describe('Override Display', () => {
	it('should display the DOM correctly', () => {
		const setUrl = jest.fn();
		const tree = renderer
			.create(
				<MemoryRouter>
					<OverrideDisplay url='' setUrl={setUrl} overrideList={[]} />
				</MemoryRouter>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	describe('logic', () => {
		it.each([
			[
				[
					'duplicate-booking',
					'hotel-not-available',
					'inventory-error',
					'one-total-price-with-mandatory-fee-breakdown',
					'price-decrease',
					'price-increase',
					'rtl',
					'is-info',
				],
				'inventory-error',
				8,
			],
			[
				[
					'amex-brasil-refund-schedule',
					'covid-refund-latency',
					'hpp-adyen-multiple-emails',
					'hpp-adyen',
					'multi-room',
					'multiple-emails',
					'partner-loyalty',
				],
				'multiple-emails',
				7,
			],
		])(
			'should display a list of overrides, when they are passed in from the parent component',
			(overrideList, override, size) => {
				const { container } = render(
					<MemoryRouter>
						<OverrideDisplay overrideList={overrideList} />
					</MemoryRouter>
				);

				//Check that list is created
				expect(container.getElementsByClassName('override-list').length).toBe(
					1
				);

				// //Check that list contains one of the overrides provided
				// expect(container.getByText(override)).toBeInTheDocument();
			}
		);
	});
});
