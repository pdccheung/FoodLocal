import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
        <Navbar.Brand href="/">FoodLocal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/"><i className="fas fa-utensils"> Home</i></Nav.Link>
            <Link to="/userfood" className="button btn-sm">My Food items</Link>
            <Link to="/userfood/new" className="button btn-sm">Add Food</Link>
            <Nav.Link href="/"><i className="far fa-user"> Sign In</i></Nav.Link>
            {/* add more link if necessary */}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
