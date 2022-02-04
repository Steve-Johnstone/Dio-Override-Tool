import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Layout/Header';
import Button from '../UI/Button';
import ErrorDisplay from '../UI/ErrorDisplay';
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

	const handlePaste = (input) => {
		setOverrideListIntoState(input);
	};

	const setOverrideListIntoState = (pastedInput) => {
		let url = pastedInput ? pastedInput : userInput;

		if (url.includes('?')) {
			let [pagePath, overrideSection] = url.split('?');
			let preSelectedOverrides = overrideSection.substring(9).split(',');

			if (!overrides[pagePath]) {
				setError('ERROR: no overrides found for provided URL.');
				return;
			}
			setSelectedOverrides(preSelectedOverrides);
			setUrl(pagePath);
			setOverrideList(overrides[pagePath]);
		} else {
			if (!overrides[url]) {
				setError('ERROR: no overrides found for provided URL.');
				return;
			}
			setUrl(url);
			setOverrideList(overrides[url]);
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
									onPaste={(e) => handlePaste(e.clipboardData.getData('Text'))}
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
