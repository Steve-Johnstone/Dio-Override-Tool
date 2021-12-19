import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.min.css';
import { capitalise } from '../helpers/capitalise';
import Header from './Header';
import Footer from './Footer';

const OverrideDisplay = ({ selectedOverrides }) => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div>
			<Header setSearchTerm={setSearchTerm} />
			<section className='section mt-2'>
				<div className='container'>
					<h4 className='title is-4'>All Overrides</h4>
					<div>
						<ul className='override-list'>
							{selectedOverrides.map((a) => {
								return (
									<li key={selectedOverrides.indexOf(a)}>{capitalise(a)}</li>
								);
							})}
						</ul>
					</div>
				</div>
				<p>{searchTerm}</p>
			</section>
			<Footer />
		</div>
	);
};

OverrideDisplay.propTypes = {
	selectedOverrides: PropTypes.array,
};

export default OverrideDisplay;
