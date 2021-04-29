// import { token } from "morgan";
import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UserLogOut from "../UserLogOut/UserLogOut";

const Header = (props) => {
  const user = props.user

  // const logoutHandler = () => {
  //   localStorage.removeItem(token)
  // }

  return (
  <header>
               <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >FoodLocal</Navbar.Brand>
            </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
            <Nav.Link><i className="fas fa-utensils"> Home</i></Nav.Link>
            </LinkContainer>   
            { user ?
            <NavDropdown title={user.name} id='username'>
              <NavDropdown.Item> <UserLogOut/> </NavDropdown.Item>
            </NavDropdown> : null
            }
            <LinkContainer to="/userfood"> 
            <Nav.Link className="button btn-sm">My Food items</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/userfood/new">
            <Nav.Link className="button btn-sm">Add Food</Nav.Link>
             </LinkContainer>
                
            {/* <LinkContainer to="/signup">
            <Nav.Link><i className="far fa-user"> Sign up</i></Nav.Link>
            </LinkContainer> */}

            <LinkContainer to="/login">
            <Nav.Link><i class="fas fa-sign-in-alt"> Login</i></Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
