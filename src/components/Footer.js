import React from 'react';
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';
import { IoMdRefresh } from 'react-icons/io';
import { AiOutlineLink } from 'react-icons/ai';
import { concatenateUrl } from '../helpers/concatenateUrl';
import 'bulma/css/bulma.min.css';

const Footer = ({ url, selectedOverrides, setSelectedOverrides }) => {
	return (
		<div className='footer-section'>
			<div className='footer-override-display'>
				<ul>
					{selectedOverrides.map((override) => {
						return <li>{override}</li>;
					})}
				</ul>
			</div>
			<div className='footer-url-display ml-5 level-item is-justify-content-flex-start'>
				<div className='ml-3'>
					<AiOutlineLink />
				</div>
				<div className='p-4'>
					localhost:8080/{url}override={concatenateUrl(selectedOverrides)}
				</div>
			</div>
			<div className='level-item is-justify-content-space-between ml-5'>
				<div>
					Click anywhere on the box to select the whole URL, this way you can
					copy it.
				</div>
				<div className='mr-5'>
					<button
						className='button is-white m-2'
						onClick={() => setSelectedOverrides([])}
					>
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
};

Footer.propTypes = {
	url: PropTypes.string,
	selectedOverrides: PropTypes.array,
	setSelectedOverrides: PropTypes.func,
};

export default Footer;
