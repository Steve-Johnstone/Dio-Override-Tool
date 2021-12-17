import React from 'react';
import PropTypes from 'prop-types';

const Overrides = ({ selectedOverrides }) => {
	return (
		<div className='container'>
			<section className='section mt-6'>
				<h1 className='title is-1'>Available Overrides</h1>

				<ul>
					{selectedOverrides.map((a) => {
						return <li key={selectedOverrides.indexOf(a)}>{a}</li>;
					})}
				</ul>
			</section>
		</div>
	);
};

Overrides.propTypes = {
	selectedOverrides: PropTypes.array,
};

export default Overrides;
