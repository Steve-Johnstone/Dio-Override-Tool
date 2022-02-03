import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import SearchBar from '../UI/SearchBar';
import OverrideList from '../UI/OverrideList';
import 'bulma/css/bulma.min.css';

const MainScreen = ({
	url,
	overrideList,
	selectedOverrides,
	setSelectedOverrides,
}) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleClick = (selectedOverride) => {
		if (!selectedOverrides.includes(selectedOverride)) {
			setSelectedOverrides([...selectedOverrides, selectedOverride]);
		} else {
			setSelectedOverrides(
				selectedOverrides.filter((override) => override !== selectedOverride)
			);
		}
	};

	return (
		<div className='override-display-conatiner'>
			<div className='header-container'>
				<div className='level-item is-justify-content-space-between'>
					<Header />
					<SearchBar setSearchTerm={setSearchTerm} />
				</div>
			</div>

			<OverrideList
				overrideList={overrideList}
				searchTerm={searchTerm}
				selectedOverrides={selectedOverrides}
				handleClick={handleClick}
			/>

			<Footer
				url={url}
				selectedOverrides={selectedOverrides}
				setSelectedOverrides={setSelectedOverrides}
			/>
		</div>
	);
};

MainScreen.propTypes = {
	url: PropTypes.string,
	overrideList: PropTypes.array,
	selectedOverrides: PropTypes.array,
	setSelectedOverrides: PropTypes.func,
};

export default MainScreen;
