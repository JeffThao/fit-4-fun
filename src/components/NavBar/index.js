import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {

    return (
        <Navbar bg="light" expand="lg">
           <Navbar.Brand href="#home">Fitness For Fun</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ml-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#home">Login/Sign-up</Nav.Link>
             </Nav>
          </Navbar.Collapse>
         </Navbar>
    );
}

export default NavBar;

