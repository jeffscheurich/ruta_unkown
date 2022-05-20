import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Exit } from './NavbarElements'
import Burger from './NavbarElements'
// import MobileNav  from './MobileNav'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Ruta Unknown</h1>
        </NavLink>
        <Burger />
        {/* <MobileNav /> */}
        {/* <NavMenu>
          <Exit />
          <NavLink to="/about" >
            about
          </NavLink>
          <NavLink 
            to="//github.com"
            target="_blank"
          >
            contribute
          </NavLink>
            <NavLink 
              to= "//www.reddit.com/r/solotravel/wiki/index"
              target="_blank"  
            >
              travel
            </NavLink>
        </NavMenu> */}
        {/* <NavBtn>
          <NavBtnLink to="/instructions">Instructions</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  )
}

export default Navbar