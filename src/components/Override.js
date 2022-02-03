import { formatOverride } from '../helpers/formatOverride';
import PropTypes from 'prop-types';

const Override = ({ override, selectedOverrides, handleClick }) => {
	const overrideClass = selectedOverrides.includes(override)
		? 'override-selected'
		: 'override-list-item';

	return (
		<li key={override} onClick={() => handleClick(override)}>
			<span className={overrideClass}>{formatOverride(override)}</span>
		</li>
	);
};

Override.propTypes = {
	override: PropTypes.string,
	selectedOverrides: PropTypes.array,
	handleClick: PropTypes.func,
};

export default Override;
