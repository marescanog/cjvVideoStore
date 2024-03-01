import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/Navigation.css';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/tv">TV</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
