import React from 'react';
import PropTypes from 'prop-types';

const Overrides = ({ overrides }) => {
	return (
		<div className='container'>
			<section className='section mt-6'>
				<h1 className='title is-1'>Available Overrides</h1>

				<ul>
					{overrides.map((a) => {
						return <li key={overrides.indexOf(a)}>{a}</li>;
					})}
				</ul>
			</section>
		</div>
	);
};

Overrides.propTypes = {
	overrides: PropTypes.array,
};

export default Overrides;
