import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from './Header';
import 'bulma/css/bulma.min.css';

const MainPage = ({ url, setUrl, setOverrideList }) => {
	const [overrides, setOverrides] = useState([]);

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

	return (
		<div className='main-page-container'>
			<div className='header level-item'>
				<Header />
			</div>
			<section>
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
									onClick={(e) => {
										e.preventDefault();
										setOverrideList(overrides[url]);
									}}
									className='button is-info mt-3'
									name='Go'
								>
									<Link style={{ color: 'white' }} to='/overrides'>
										GO
									</Link>
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

MainPage.propTypes = {
	url: PropTypes.string,
	setUrl: PropTypes.func,
	setOverrideList: PropTypes.func,
};

export default MainPage;
