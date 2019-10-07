import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../../../src/assets/img/logo.png';

const Menu = () => (
  <Navbar id="menu" expand="lg" sticky="top" collapseOnSelect>
  <Navbar.Brand href="#home"><img src={Logo} alt="logo" /></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#sobre">Sobre</Nav.Link>
      <Nav.Link href="#programacao">Programação</Nav.Link>
      <Nav.Link href="#palestrantes">Palestrantes</Nav.Link>
      <Nav.Link href="#patrocinadores">Patrocinadores</Nav.Link>
      <Nav.Link href="#inscricoes">Inscrições</Nav.Link>
      <Nav.Link href="#form-contato">Contato</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
  <div id="progress-bar"></div>
</Navbar>

)
export default Menu;




