import React, { useState } from 'react';
import OpeningScreen from './OpeningScreen.js';
import OverrideScreen from './OverrideScreen.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';

function App() {
	const [url, setUrl] = useState('');
	const [overrideList, setOverrideList] = useState([]);
	const [selectedOverrides, setSelectedOverrides] = useState([]);

	return (
		<Router>
			<Routes>
				<Route
					exact
					path='/'
					element={
						<OpeningScreen
							setUrl={setUrl}
							setOverrideList={setOverrideList}
							setSelectedOverrides={setSelectedOverrides}
						/>
					}
				/>
				<Route
					exact
					path='/overrides'
					element={
						<OverrideScreen
							url={url}
							overrideList={overrideList}
							selectedOverrides={selectedOverrides}
							setSelectedOverrides={setSelectedOverrides}
						/>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
