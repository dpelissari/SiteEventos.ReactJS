import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../../../src/assets/img/logo.png';

const Menu = () => (
  <Navbar id="menu" expand="lg" sticky="top">
  <Navbar.Brand href="#home"><img src={Logo} alt="logo" /></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Programação</Nav.Link>
      <Nav.Link href="#link">Palestrantes</Nav.Link>
      <Nav.Link href="#link">Patrocinadores</Nav.Link>
      <Nav.Link href="#rodape">Contato</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
export default Menu;