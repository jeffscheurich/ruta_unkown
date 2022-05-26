import React from "react";
import { Nav, NavLink } from "./NavbarElements";
import Burger from "./NavbarElements";
import { run } from "../../functions/AwsFunctions";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" onClick={() => run()}>
          <h1>Ruta Unknown</h1>
        </NavLink>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;