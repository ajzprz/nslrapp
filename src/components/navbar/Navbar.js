import React from 'react';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';



function NavigationBar(){
    return (
    <Navbar bg="white" expand="lg" className="shadow" >
  <Navbar.Brand href="/"><h1>NSLRS</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ml-auto">
      <Nav.Link className="px-4" href="/home">Home</Nav.Link>
      <Nav.Link className="px-4" href="/background">Background</Nav.Link>
      <Nav.Link  className="px-4" href="/aboutus">About Us</Nav.Link>
      <Nav.Link  className="px-4" href="/contactus">Contact Us</Nav.Link>
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="/realtime">Detect From Webcam</NavDropdown.Item>
        <NavDropdown.Item href="/fromimg">Detect From Photos</NavDropdown.Item>
        <NavDropdown.Item href="/fromvid">Detect From Video</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavigationBar;
