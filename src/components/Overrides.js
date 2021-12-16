import React from 'react';
import PropTypes from 'prop-types';

const Overrides = ({ url }) => {
	return (
		<div className='container'>
			<section className='section mt-6'>
				<h1 className='title is-1'>Available Overrides</h1>
				<p>{url}</p>
			</section>
		</div>
	);
};

Overrides.propTypes = {
	url: PropTypes.string,
};

export default Overrides;
