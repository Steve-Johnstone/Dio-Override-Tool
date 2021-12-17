import React, { useState } from 'react';
import MainPage from './MainPage.js';
import Overrides from './Overrides.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';

function App() {
	const [url, setUrl] = useState('');
	const [overrides, setOverrides] = useState([]);

	return (
		<Router>
			<Routes>
				<Route
					exact
					path='/'
					element={
						<MainPage url={url} setUrl={setUrl} setOverrides={setOverrides} />
					}
				/>
				<Route
					exact
					path='/overrides'
					element={<Overrides overrides={overrides} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
