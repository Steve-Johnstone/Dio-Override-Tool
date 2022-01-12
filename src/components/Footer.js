import React from 'react';
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';
import { IoMdRefresh } from 'react-icons/io';
import { AiOutlineLink } from 'react-icons/ai';
import { buildUrl } from '../helpers/buildUrl';
import 'bulma/css/bulma.min.css';

const Footer = ({ url, selectedOverrides, setSelectedOverrides }) => {
	const handleClick = (clickedOverride) => {
		setSelectedOverrides(
			selectedOverrides.filter((override) => override !== clickedOverride)
		);
	};

	return (
		<div className='footer-section'>
			<div className='footer-override-display'>
				<ul className='footer-override-list'>
					{selectedOverrides.map((override) => {
						return (
							<li
								key={selectedOverrides.indexOf(override)}
								onClick={() => handleClick(override)}
								data-testid='list-item'
							>
								{override}
							</li>
						);
					})}
				</ul>
			</div>
			<div className='footer-url-display ml-5 level-item is-justify-content-flex-start'>
				<div className='ml-3'>
					<AiOutlineLink />
				</div>
				<div id='url-display' data-testid='url-display' className='p-2'>
					{buildUrl(url, selectedOverrides)}
				</div>
			</div>
			<div className='level-item is-justify-content-space-between ml-5'>
				<div>
					Click anywhere on the box to select the whole URL, this way you can
					copy it.
				</div>
				<div className='mr-5'>
					<button
						name='clear-all'
						className='button is-white m-2'
						onClick={() => setSelectedOverrides([])}
					>
						<ImCross />
						&nbsp;&nbsp;Clear All
					</button>
					<a
						id='go-button'
						className='button m-2'
						href={buildUrl(url, selectedOverrides)}
						target='blank'
					>
						<IoMdRefresh />
						&nbsp;&nbsp;Show it
					</a>
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
