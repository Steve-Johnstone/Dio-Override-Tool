import React from 'react';
import 'bulma/css/bulma.min.css';

const Header = () => {
	return (
		<div className='is-flex is-justify-content-space-between'>
			<img
				className='logo'
				src='image/hotelscom-logo.png'
				alt='hcom logo'
				data-testid='logo'
			></img>
			<p>Dio Override Tool</p>
		</div>
	);
};

export default Header;
