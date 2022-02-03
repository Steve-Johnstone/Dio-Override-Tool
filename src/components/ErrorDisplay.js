const ErrorDisplay = ({ error }) => {
	return (
		<div className='message is-danger mt-5'>
			<div className='message-body'>{error}</div>
		</div>
	);
};

export default ErrorDisplay;
