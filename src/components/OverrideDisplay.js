import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.min.css';
import { formatOverrides } from '../helpers/formatOverrides';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import { filterOverrides } from '../helpers/filterOverrides';

const OverrideDisplay = ({
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
			<div className='header'>
				<div className='level-item is-justify-content-space-between'>
					<Header />
					<SearchBar setSearchTerm={setSearchTerm} />
				</div>
			</div>

			<div className='container p-5'>
				<h4 className='title is-4'>All Overrides</h4>
				<div>
					<ul className='override-list' data-testid='override-list'>
						{overrideList
							.filter((override) => filterOverrides(override, searchTerm))
							.map((override) => {
								return (
									<li
										key={overrideList.indexOf(override)}
										onClick={() => handleClick(override)}
									>
										<span
											className={
												selectedOverrides.includes(override)
													? 'override-selected'
													: 'override-list-item'
											}
										>
											{formatOverrides(override)}
										</span>
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
	url: PropTypes.string,
	overrideList: PropTypes.array,
	selectedOverrides: PropTypes.array,
	setSelectedOverrides: PropTypes.func,
};

export default OverrideDisplay;
