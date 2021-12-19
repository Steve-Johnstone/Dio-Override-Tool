import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.min.css';
import { capitalise } from '../helpers/capitalise';

const OverrideDisplay = ({ selectedOverrides }) => {
	return (
		<section className='section mt-2'>
			<div className='container'>
				<h3 className='title is-3'>All Overrides</h3>
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
		</section>
	);
};

OverrideDisplay.propTypes = {
	selectedOverrides: PropTypes.array,
};

export default OverrideDisplay;
