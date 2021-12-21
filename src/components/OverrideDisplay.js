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

	const handleClick = (override, event) => {
		setSelectedOverrides([...selectedOverrides, override]);

		const item = event.target;

		if (!item.className) {
			item.className = 'override-selected';
			item.style.fontWeight = 'bold';
		} else {
			item.className = '';
			item.style.fontWeight = '';
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

			<section className='section'>
				<div className='container'>
					<h4 className='title is-4'>All Overrides</h4>
					<div>
						<ul className='override-list'>
							{overrideList.map((override) => {
								return (
									<li
										key={overrideList.indexOf(override)}
										onClick={(event) => handleClick(override, event)}
									>
										{formatOverrides(override)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>
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
