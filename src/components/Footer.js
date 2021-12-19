import React from 'react';
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';
import { IoMdRefresh } from 'react-icons/io';
import { AiOutlineLink } from 'react-icons/ai';
import 'bulma/css/bulma.min.css';

function Footer({ url }) {
	return (
		<div className='footer-section'>
			<div className='footer-url-display ml-5 level-item is-justify-content-flex-start'>
				<div className='ml-3'>
					<AiOutlineLink />
				</div>
				<div className='p-4'>{url}</div>
			</div>
			<div className='level-item is-justify-content-space-between ml-5'>
				<div>
					Click anywhere on the box to select the whole URL, this way you can
					copy it.
				</div>
				<div className='mr-5'>
					<button className='button is-white m-2'>
						<ImCross />
						&nbsp;&nbsp;Clear All
					</button>
					<button className='button is-link m-2'>
						<IoMdRefresh />
						&nbsp;&nbsp;Show it
					</button>
				</div>
			</div>
		</div>
	);
}

Footer.propTypes = {
	url: PropTypes.string,
};

export default Footer;
