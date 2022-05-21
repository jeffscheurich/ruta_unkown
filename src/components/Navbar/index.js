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
      </Nav>
    </>
  )
}

export default Navbar