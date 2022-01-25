import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from './Header';
import 'bulma/css/bulma.min.css';

const OpeningScreen = ({
	url,
	setUrl,
	setOverrideList,
	setSelectedOverrides,
}) => {
	const [overrides, setOverrides] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const axiosPosts = async () => {
			const response = await axios({
				method: 'get',
				url: 'http://localhost:8080/mock/override-data.json',
			});
			setOverrides(response.data.overrides);
		};
		axiosPosts();
	}, []);

	const handleClick = (e) => {
		e.preventDefault();

		if (overrides.length === 0) {
			return setError('ERROR: no connection to the host server.');
		}
		setOverrideListIntoState();
	};

	const setOverrideListIntoState = () => {
		if (url.includes('?')) {
			let [pagePath, overrideSection] = url.split('?');
			let preSelectedOverrides = overrideSection.substring(9).split(',');

			if (!overrides[pagePath]) {
				return setError('ERROR: no overrides found for provided URL.');
			}
			setSelectedOverrides(preSelectedOverrides);
			setUrl(pagePath);
			setOverrideList(overrides[pagePath]);
		} else {
			if (!overrides[url]) {
				return setError('ERROR: no overrides found for provided URL.');
			}
			setOverrideList(overrides[url]);
		}
	};

	return (
		<div className='main-page-container'>
			<div className='header level-item is-justify-content-space-between'>
				<Header />
			</div>

			<div className='container p-4'>
				<div>
					<form className='field py-2'>
						<div style={{ width: '40%' }} className='control'>
							<label htmlFor='text' className='label'>
								Local URL of the page
							</label>
							<div>
								<input
									name='url'
									className='input is-link level-item'
									placeholder='www.url.com'
									type='text'
									onChange={(e) => setUrl(e.target.value)}
								></input>
							</div>
							<button
								onClick={(e) => handleClick(e)}
								className='button mt-4'
								name='Go'
								id='go-button'
							>
								<Link style={{ color: 'white' }} to='/overrides'>
									GO
								</Link>
							</button>
							<div className={error ? 'message is-danger mt-5' : ''}>
								<div className={error ? 'message-body' : ''}>{error}</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

OpeningScreen.propTypes = {
	url: PropTypes.string,
	setUrl: PropTypes.func,
	setOverrideList: PropTypes.func,
	setSelectedOverrides: PropTypes.func,
};

export default OpeningScreen;
