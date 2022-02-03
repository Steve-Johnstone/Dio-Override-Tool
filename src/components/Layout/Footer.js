import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';
import SelectedOverrideList from '../UI/SelectedOverrideList';
import UrlDisplay from '../UI/UrlDisplay';
import { buildUrl } from '../../helpers/buildUrl';
import { MdClear } from 'react-icons/md';
import { IoMdRefresh } from 'react-icons/io';
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
				<SelectedOverrideList
					selectedOverrides={selectedOverrides}
					onClick={handleOverrideClick}
				/>

				<p className='footer-label'>URL:</p>
				<UrlDisplay url={url} selectedOverrides={selectedOverrides} />

				<div className={urlCopied ? 'url-copied' : ''}>
					<div>{urlCopied ? 'URL copied to clipboard' : ''} </div>
				</div>
				<div className='level-item is-justify-content-space-between'>
					<Button
						className='is-info'
						text='Copy URL'
						id='copy-button'
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
