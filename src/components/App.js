import React, { useState } from 'react';
import OpeningScreen from './OpeningScreen.js';
import OverrideDisplay from './OverrideDisplay.js';
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
							url={url}
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
						<OverrideDisplay
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
