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
	<div style={{backgroundColor: "#33002E"}}>
	<Router>
		<div>
			<h1 style={{padding: 0}}>
				<img src={require("./components/images/RowdyRamLogo.png")} alt="Rowdy Rams" style={{width: 250, height: 250, float: "right", marginRight: 10}}></img>
				<p style={{marginLeft: "2%", fontSize: 70, color: "#FFFFFF", marginTop: 10, paddingTop: 40, lineHeight: 0}}>Example Beverage Co.</p>
				<i style={{color: "#FFFFFF", marginLeft: "5%"}}>"Everything you need and more!"</i>
			</h1>
		</div>
		<div style={{marginLeft: "2%"}}>
			<Navbar />
			<Routes>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/wine' component={Wine} />
				<Route path='/sales' component={Sales} />
				<Route path='/beer' component={Beer} />
			<Route path='/spirits' component={Spirits} />
			</Routes>
		</div>
	</Router>
	</div>
	
);
}

export default App;
