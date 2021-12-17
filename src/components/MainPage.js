import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'bulma/css/bulma.min.css';

const MainPage = ({ url, setUrl, setSelectedOverrides }) => {
	const [overrides, setOverrides] = useState([]);

	useEffect(() => {
		const axiosPosts = async () => {
			const response = await axios({
				method: 'get',
				url: 'http://localhost:8080/mock/override-data.json',
			});
			setOverrides(response.data.overrides);
			console.log('overrides', overrides);
		};
		axiosPosts();
	}, []);

	return (
		<div className='container'>
			<section className='section mt-6'>
				<h1 style={{ color: '#d32f2f' }} className='title is-1'>
					Override Tool
				</h1>
				<div>
					<form className='field py-2'>
						<div style={{ width: '50%' }} className='control'>
							<label htmlFor='text' className='label'>
								Local URL of the page
							</label>
							<div className='level'>
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
									setSelectedOverrides(overrides[url]);
								}}
								className='button is-info'
							>
								<Link style={{ color: 'white' }} to='/overrides'>
									GO
								</Link>
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

MainPage.propTypes = {
	url: PropTypes.string,
	setUrl: PropTypes.func,
	setSelectedOverrides: PropTypes.func,
};

export default MainPage;
