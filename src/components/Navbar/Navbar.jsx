import React from "react";
import { Container, Nav, Brand, NavList, NavItem, NavLink } from "./Navbar.styled";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <Nav>
        <Brand>Movie App</Brand>
        <NavList>
          <NavItem><NavLink as={Link} to="/">Home</NavLink></NavItem>
          <NavItem><NavLink as={Link} to="/movie/create">Add Movie</NavLink></NavItem>
          <NavItem><NavLink as={Link} to="/movie/popular">Popular</NavLink></NavItem>
          <NavItem><NavLink as={Link} to="/movie/nowplaying">Now Playing</NavLink></NavItem>
          <NavItem><NavLink as={Link} to="/movie/toprated">Top Rated</NavLink></NavItem>
        </NavList>
      </Nav>
    </Container>
  );
}

export default Navbar;
