import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/components/Navigation.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="navigation_container" sticky="top">
      <Container fluid >
        <Navbar.Brand as={NavLink} to="/home" className="nav-brand">
          <img src="/img/bingeFlix.png" className="nav-icon-image" alt="" />
          <p className="nav-brand-text">BINGEFLIX</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home" activeClassName="selected">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
            <Nav.Link as={NavLink} to="/tv">TV</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
