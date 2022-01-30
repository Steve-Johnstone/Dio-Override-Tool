import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { MdClear } from 'react-icons/md';
import { IoMdRefresh } from 'react-icons/io';
import { AiOutlineLink } from 'react-icons/ai';
import { buildUrl } from '../helpers/buildUrl';
import 'bulma/css/bulma.min.css';

const Footer = ({ url, selectedOverrides, setSelectedOverrides }) => {
	const [urlCopied, setUrlCopied] = useState(false);

	const handleOverrideClick = (clickedOverride) => {
		setSelectedOverrides(
			selectedOverrides.filter((override) => override !== clickedOverride)
		);
	};

	const handleCopyButtonClick = () => {
		const displayBox = 'url-display-box';
		let r = document.createRange();
		r.selectNode(document.getElementById(displayBox));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(r);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
		setUrlCopied(true);
		document.getElementById(displayBox).style.backgroundColor = '#fefee6';
		document.getElementById('copy-button').className += ' is-light';
	};

	const handleClearButtonClick = () => {
		setSelectedOverrides([]);
		setUrlCopied(false);
		document.getElementById('url-display-box').style.backgroundColor = '';
		document.getElementById('copy-button').className = 'button is-info';
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
									onClick={() => handleOverrideClick(override)}
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
					<div id='url-display' data-testid='url-display' className='p-2'>
						{buildUrl(url, selectedOverrides)}
					</div>
				</div>
				<div className={urlCopied ? 'url-copied' : ''}>
					<div>{urlCopied ? 'URL copied to clipboard' : ''} </div>
				</div>
				<div className='level-item is-justify-content-space-between'>
					<Button
						className='is-info'
						id='copy-button'
						text='Copy URL'
						onClick={handleCopyButtonClick}
					></Button>

					<div className='level-item is-justify-content-space-between mr-5'>
						<Button
							className='is-danger m-2'
							name='clear-all'
							text='Clear All'
							onClick={handleClearButtonClick}
							icon={<MdClear />}
						></Button>

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
