import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.min.css';

const OverrideDisplay = ({ selectedOverrides }) => {
	return (
		<section className='section mt-6'>
			<div className='container'>
				<h3 className='title is-3'>All Overrides</h3>
				<div>
					<ul id='override-display'>
						{selectedOverrides.map((a) => {
							return <li key={selectedOverrides.indexOf(a)}>{a}</li>;
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
