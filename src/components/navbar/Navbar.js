import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="white" expand="lg" className="shadow">
      <Navbar.Brand href="/"><h4>NSLRS</h4></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className="px-4" href="/home">Home</Nav.Link>
          <Nav.Link className="px-4" href="/background">Background</Nav.Link>
          <Nav.Link className="px-4" href="/aboutus">About Us</Nav.Link>
          <Nav.Link className="px-4" href="/contactus">Contact Us</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="/realtime">Detect From Webcam</NavDropdown.Item>
            <NavDropdown.Item href="/fromimg">Detect From Photos</NavDropdown.Item>
            <NavDropdown.Item href="/fromvid">Detect From Video</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex ml-auto">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
