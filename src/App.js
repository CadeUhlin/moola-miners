import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/aboutus';
import Wine from './pages/wine';
import Sales from './pages/sales';
import Beer from './pages/beer';
import Spirits from './pages/spirits';
import Home from './pages/home'

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/wine' component={Wine} />
		<Route path='/sales' component={Sales} />
		<Route path='/beer' component={Beer} />
    <Route path='/spirits' component={Spirits} />
	</Routes>
	</Router>
);
}

export default App;
