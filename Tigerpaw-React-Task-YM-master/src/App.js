import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import AppRoutes from './components/AppRoutes.js'; //Routing

import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			{/* Header or Top Navabr */}
			<Header />
			<div className="app-container">
				{/* Sidebar */}
				<Sidebar />

				{/* Main content */}
				<div className="content-container">
					<AppRoutes /> {/* Render route configuration component*/}
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;