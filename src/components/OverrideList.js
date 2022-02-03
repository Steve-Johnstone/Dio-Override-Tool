import Override from './Override';
import { filterOverrides } from '../helpers/filterOverrides';
import PropTypes from 'prop-types';

const OverrideList = ({
	overrideList,
	searchTerm,
	selectedOverrides,
	handleClick,
}) => {
	return (
		<div className='container mt-5 ml-5'>
			<h2>All Overrides</h2>
			<ul className='override-list' data-testid='override-list'>
				{overrideList
					.filter((override) => filterOverrides(override, searchTerm))
					.map((override) => {
						return (
							<Override
								override={override}
								selectedOverrides={selectedOverrides}
								handleClick={handleClick}
							/>
						);
					})}
			</ul>
		</div>
	);
};

OverrideList.propTypes = {
	overrideList: PropTypes.array,
	searchTerm: PropTypes.string,
	selectedOverrides: PropTypes.array,
	handleClick: PropTypes.func,
};

export default OverrideList;
