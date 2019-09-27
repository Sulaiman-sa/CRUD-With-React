import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          reactstrap
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/streams/show">
              All Streams
            </NavLink>
          </NavItem>
          <GoogleAuth />
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
