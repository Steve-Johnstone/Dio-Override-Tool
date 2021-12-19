import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import 'bulma/css/bulma.min.css';

const Header = ({ setSearchTerm }) => {
	return (
		<div className='header'>
			<div className='level-item is-justify-content-space-between'>
				<div>
					<p className='ml-6'>Dio Override Tool</p>
				</div>

				<form id='search-bar-container' className='field py-5'>
					<div className='search-bar'>
						<div className='search-icon'>
							<AiOutlineSearch />
						</div>
						<input
							name='search item'
							className='input'
							id='search-input-field'
							placeholder='Start typing to filter...'
							type='text'
							onChange={(e) => setSearchTerm(e.target.value)}
						></input>
					</div>
				</form>
			</div>
		</div>
	);
};

Header.propTypes = {
	setSearchTerm: PropTypes.func,
};

export default Header;
