import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/aboutus';
import Wine from './pages/wine';
import Sales from './pages/sales';
import Beer from './pages/beer';
import Spirits from './pages/spirits';
import Home from './pages/home'

function App() {
return (
<html>
	<header style={{backgroundColor: "#33002E"}}>
	<Router>
		<div>
			<h1 style={{padding: 0}}>
				<img src={require("./components/images/RowdyRamLogo.png")} alt="Rowdy Rams" style={{width: 250, height: 250, float: "right", marginRight: 10}}></img>
				<p style={{marginLeft: "2%", fontSize: 70, color: "#FFFFFF", marginTop: 10, paddingTop: 40, lineHeight: 0}}>Example Beverage Co.</p>
				<i style={{color: "#FFFFFF", marginLeft: "5%"}}>"Everything you need and more!"</i>
			</h1>
		</div>
		<nav style={{marginLeft: "2%"}}>
			<Navbar />
			<Routes>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/wine' component={Wine} />
				<Route path='/sales' component={Sales} />
				<Route path='/beer' component={Beer} />
			<Route path='/spirits' component={Spirits} />
			</Routes>
		</nav>
		<Outlet />
	</Router>
	</header>
	<body>
		<article>
			<secton>
				<h1 style={{fontSize: 40, lineHeight: 0}}>Featured Products</h1>
				<hr style={{size: 200, color: "#33002E"}}></hr>
			</secton>
			<section>
				<img src={require("./components/images/vodka.png")} alt="Rowdy Rams" style={{width: 200, height: 400, float: "left", marginLeft: 60, lineHeight: 0}}></img>
				<img src={require("./components/images/bluemoon.png")} alt="Rowdy Rams" style={{width: 300, height: 350, float: "left", marginLeft: 110, lineHeight: 0}}></img>
				<img src={require("./components/images/wine.png")} alt="Rowdy Rams" style={{width: 400, height: 400, float: "left", marginRight: 20, lineHeight: 0}}></img>
				<img src={require("./components/images/ciroc.png")} alt="Rowdy Rams" style={{width: 300, height: 400, float: "left", marginRight: 10, lineHeight: 0}}></img>
				<br/>
				<div style={{lineHeight: 0}}>
					<h2 style={{lineHeight: 0, marginTop: "30%", marginLeft: "4%"}}>Absolut Vodka $26.99</h2>
					<h2 style={{marginLeft: "29%", lineHeight: 0, alignItems: "right"}}>Blue Moon $14.50</h2>
					<h2 style={{marginLeft: "55%", lineHeight: 0, alignItems: "right"}}>Cupcake Wine $15.99</h2>
					<h2 style={{marginLeft: "80%", lineHeight: 0, alignItems: "right"}}>Ciroc Mango Vodka 18.99</h2>
				</div>
			</section>
		</article>
		<footer style={{backgroundColor: "#33002E", marginTop: "5%", height: 200, marginBottom: 0, lineHeight: 0}}>
			<p style={{color: "#FFFFFF", float: "right", marginRight: "5%", marginTop: "3%" }}>XXX-XXX-XXXX</p>
			<p style={{color: "#FFFFFF", fontSize: 50, paddingTop: "5%", marginLeft: "2%"}}>Rowdy Rams</p>
			<p style={{color: "#FFFFFF", fontSize: 50, marginLeft: "2%"}}>Beverage Co.</p>
			
		</footer>
	</body>
</html>
);
}

export default App;
