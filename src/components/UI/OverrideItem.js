import { formatOverride } from '../../helpers/formatOverride';
import PropTypes from 'prop-types';

const OverrideItem = ({ override, selectedOverrides, handleClick }) => {
	const overrideClass = selectedOverrides.includes(override)
		? 'override-selected'
		: 'override-list-item';

	return (
		<li onClick={() => handleClick(override)}>
			<span className={overrideClass}>{formatOverride(override)}</span>
		</li>
	);
};

OverrideItem.propTypes = {
	override: PropTypes.string,
	selectedOverrides: PropTypes.array,
	handleClick: PropTypes.func,
};

export default OverrideItem;
