import PropTypes from 'prop-types';

const SelectedOverrideList = ({ selectedOverrides, onClick }) => {
	return (
		<div>
			<p className='footer-label'>
				{selectedOverrides.length > 0 ? 'Selected Overrides: ' : ''}
			</p>
			<div className='footer-override-display'>
				<ul className='footer-override-list'>
					{selectedOverrides.map((override) => {
						return (
							<li
								key={override}
								onClick={() => onClick(override)}
								data-testid='list-item'
							>
								{override}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

SelectedOverrideList.propTypes = {
	selectedOverrides: PropTypes.array,
	onClick: PropTypes.func,
};

export default SelectedOverrideList;
