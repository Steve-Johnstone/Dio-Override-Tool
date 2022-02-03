import { buildUrl } from '../helpers/buildUrl';
import { AiOutlineLink } from 'react-icons/ai';
import PropTypes from 'prop-types';

const UrlDisplay = ({ url, selectedOverrides }) => {
	return (
		<div
			className='footer-url-display mb-3 level-item is-justify-content-flex-start'
			id='url-display-box'
		>
			<div className='ml-3'>
				<AiOutlineLink />
			</div>
			<div id='url-display' data-testid='url-display' className='p-2'>
				{buildUrl(url, selectedOverrides)}
			</div>
		</div>
	);
};

UrlDisplay.propTypes = {
	url: PropTypes.string,
	selectedOverrides: PropTypes.array,
};

export default UrlDisplay;
