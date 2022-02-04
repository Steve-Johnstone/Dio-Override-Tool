import PropTypes from 'prop-types';

const ErrorDisplay = ({ error }) => {
	return (
		<div className='message is-danger mt-5'>
			<div className='message-body'>{error}</div>
		</div>
	);
};

ErrorDisplay.propTypes = {
	error: PropTypes.string,
};

export default ErrorDisplay;
