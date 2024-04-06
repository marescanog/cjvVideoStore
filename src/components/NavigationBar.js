import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/components/Navigation.css';
import { useCookies } from 'react-cookie';

const NavigationBar = () => {
  const [cookies] = useCookies(['xsrf']);

  useEffect(()=>{

  },[cookies.hasOwnProperty('xsrf')])

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
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
            <Nav.Link as={NavLink} to="/tv">TV</Nav.Link>
          </Nav>
          {
            cookies.hasOwnProperty('xsrf') && cookies['xsrf'] != null ? 
            <Nav className="justify-content-end">
              <Nav.Link as={NavLink} to="/account">My Account</Nav.Link>
              <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
            </Nav>
            :
            <Nav className="justify-content-end">
              <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            </Nav>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
