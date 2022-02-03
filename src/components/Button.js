import PropTypes from 'prop-types';
import 'bulma/css/bulma.min.css';

const Button = ({ className, name, id, text, onClick, icon, link }) => {
	return (
		<div>
			<button
				className={`button ${className}`}
				id={id}
				name={name}
				onClick={onClick}
			>
				{icon && <span id='icon-span'>{icon} &nbsp;</span>}
				{text}
				{link && link}
			</button>
		</div>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
	icon: PropTypes.object,
	link: PropTypes.object,
};

export default Button;
