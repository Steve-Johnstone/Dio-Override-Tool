import React, { useState } from 'react';
import MainPage from './MainPage.js';
import Overrides from './Overrides.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';

function App() {
	const [url, setUrl] = useState('');
	const [selectedOverrides, setSelectedOverrides] = useState([]);

	return (
		<Router>
			<Routes>
				<Route
					exact
					path='/'
					element={
						<MainPage
							url={url}
							setUrl={setUrl}
							setSelectedOverrides={setSelectedOverrides}
						/>
					}
				/>
				<Route
					exact
					path='/overrides'
					element={<Overrides selectedOverrides={selectedOverrides} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
