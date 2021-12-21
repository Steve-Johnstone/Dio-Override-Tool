import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.min.css';
import { formatOverrides } from '../helpers/formatOverrides';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';

const OverrideDisplay = ({ url, overrideList }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedOverrides, setSelectedOverrides] = useState([]);

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
			<div className='header'>
				<div className='level-item is-justify-content-space-between'>
					<Header />
					<SearchBar setSearchTerm={setSearchTerm} />
				</div>
			</div>

			<div className='container p-3'>
				<h4 className='title is-4'>All Overrides</h4>
				<div>
					<ul className='override-list'>
						{overrideList.map((override) => {
							return (
								<li
									key={overrideList.indexOf(override)}
									onClick={() => handleClick(override)}
									className={
										selectedOverrides.includes(override)
											? 'override-selected'
											: ''
									}
								>
									{formatOverrides(override)}
								</li>
							);
						})}
					</ul>
				</div>
			</div>

			<Footer
				url={url}
				selectedOverrides={selectedOverrides}
				setSelectedOverrides={setSelectedOverrides}
			/>
		</div>
	);
};

OverrideDisplay.propTypes = {
	overrideList: PropTypes.array,
	url: PropTypes.string,
};

export default OverrideDisplay;
