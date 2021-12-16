import React, { useState } from 'react';
import MainPage from './MainPage.js';
import Overrides from './Overrides.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';

function App() {
	const [url, setUrl] = useState('');

	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<MainPage setUrl={setUrl} />} />
				<Route exact path='/overrides' element={<Overrides url={url} />} />
			</Routes>
		</Router>
	);
}

export default App;
