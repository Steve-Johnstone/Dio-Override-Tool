import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import 'bulma/css/bulma.min.css';

const SearchBar = ({ setSearchTerm }) => {
	return (
		<div>
			<form id='search-bar-container' className='field py-5'>
				<div className='search-bar'>
					<div className='search-icon' data-testid='search-icon'>
						<AiOutlineSearch />
					</div>
					<input
						name='search-item'
						className='input'
						id='search-input-field'
						placeholder='Start typing to filter...'
						type='text'
						onChange={(e) => setSearchTerm(e.target.value)}
					></input>
				</div>
			</form>
		</div>
	);
};

SearchBar.propTypes = {
	setSearchTerm: PropTypes.func,
};

export default SearchBar;
