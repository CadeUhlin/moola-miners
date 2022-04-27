import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/wine' activeStyle>
			Wine
		</NavLink>
		<NavLink to='/beer' activeStyle>
			Beer
		</NavLink>
		<NavLink to='/spirits' activeStyle>
			Spirits
		</NavLink>
		<NavLink to='/sales' activeStyle>
			Sales
		</NavLink>
		<NavLink to='/about' activeStyle>
			About Us
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
