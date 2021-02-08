import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {

    return (
        <Navbar bg="light" expand="lg">
           <Navbar.Brand className="ml-5" href="#home">Fitness For Fun</Navbar.Brand>
             <Nav className="ml-auto mr-5">
               <Nav.Link href="#home">Log In</Nav.Link>
               <Nav.Link href="#home">Sign Up</Nav.Link>
             </Nav>
         </Navbar>
    );
}

export default NavBar;

