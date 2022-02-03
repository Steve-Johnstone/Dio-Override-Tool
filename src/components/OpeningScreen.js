import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Button from './Button';
import ErrorDisplay from './ErrorDisplay';
import axios from 'axios';
import 'bulma/css/bulma.min.css';

const OpeningScreen = ({ setUrl, setOverrideList, setSelectedOverrides }) => {
	const [overrides, setOverrides] = useState([]);
	const [error, setError] = useState('');
	const [userInput, setUserInput] = useState('');
	const navigate = useNavigate();

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
			setError('ERROR: no connection to the host server.');
			return;
		}
		setOverrideListIntoState();
	};

	const setOverrideListIntoState = () => {
		if (userInput.includes('?')) {
			let [pagePath, overrideSection] = userInput.split('?');
			let preSelectedOverrides = overrideSection.substring(9).split(',');

			if (!overrides[pagePath]) {
				setError('ERROR: no overrides found for provided URL.');
				return;
			}
			setSelectedOverrides(preSelectedOverrides);
			setUrl(pagePath);
			setOverrideList(overrides[pagePath]);
		} else {
			if (!overrides[userInput]) {
				setError('ERROR: no overrides found for provided URL.');
				return;
			}
			setUrl(userInput);
			setOverrideList(overrides[userInput]);
		}
		navigate('/overrides');
	};

	return (
		<div className='main-page-container'>
			<div className='header-container level-item is-justify-content-space-between'>
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
									placeholder='www.hotels.com'
									type='text'
									onChange={(e) => setUserInput(e.target.value)}
								></input>
							</div>
							<Button
								className='is-info mt-4'
								name='Go'
								text='GO'
								onClick={(e) => handleClick(e)}
							></Button>

							{error && <ErrorDisplay error={error} />}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

OpeningScreen.propTypes = {
	setUrl: PropTypes.func,
	setOverrideList: PropTypes.func,
	setSelectedOverrides: PropTypes.func,
};

export default OpeningScreen;
