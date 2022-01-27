import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';
import { IoMdRefresh } from 'react-icons/io';
import { AiOutlineLink } from 'react-icons/ai';
import { buildUrl } from '../helpers/buildUrl';
import 'bulma/css/bulma.min.css';

const Footer = ({ url, selectedOverrides, setSelectedOverrides }) => {
	const [urlCopied, setUrlCopied] = useState(false);

	const handleClick = (clickedOverride) => {
		setSelectedOverrides(
			selectedOverrides.filter((override) => override !== clickedOverride)
		);
	};

	const copyToClipboard = (id) => {
		let r = document.createRange();
		r.selectNode(document.getElementById(id));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(r);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
		setUrlCopied(true);
		document.getElementById(id).style.backgroundColor = '#fefee6';
	};

	return (
		<div className='footer-section'>
			<div className='footer-container'>
				<p className='footer-label'>
					{selectedOverrides.length > 0 ? 'Selected Overrides: ' : ''}
				</p>
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
				<p className='footer-label'>URL:</p>
				<div
					className='footer-url-display mb-3 level-item is-justify-content-flex-start'
					id='url-display-box'
				>
					<div className='ml-3'>
						<AiOutlineLink />
					</div>
					<div id='url-display' data-testid='url-display' className='p-3'>
						{buildUrl(url, selectedOverrides)}
					</div>
				</div>
				<div className={urlCopied ? 'url-copied' : ''}>
					<div>{urlCopied ? 'URL copied to clipboard' : ''} </div>
				</div>
				<div className='level-item is-justify-content-space-between'>
					<button
						className='button is-info'
						onClick={() => copyToClipboard('url-display-box')}
					>
						Copy URL
					</button>
					<div className='mr-5'>
						<button
							name='clear-all'
							className='button is-danger m-2'
							onClick={() => {
								setSelectedOverrides([]);
								setUrlCopied(false);
								document.getElementById(
									'url-display-box'
								).style.backgroundColor = '';
							}}
						>
							<ImCross />
							&nbsp;&nbsp;Clear All
						</button>
						<a
							name='show-it'
							className='button is-success m-2'
							href={buildUrl(url, selectedOverrides)}
							target='blank'
						>
							<IoMdRefresh />
							&nbsp;&nbsp;Show it
						</a>
					</div>
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
