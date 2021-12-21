import React, { useState } from 'react';
import MainPage from './MainPage.js';
import OverrideDisplay from './OverrideDisplay.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';

function App() {
	const [url, setUrl] = useState('');
	const [overrideList, setOverrideList] = useState([]);

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
							setOverrideList={setOverrideList}
						/>
					}
				/>
				<Route
					exact
					path='/overrides'
					element={<OverrideDisplay url={url} overrideList={overrideList} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
