import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../../../src/assets/img/logo.png';

const Menu = () => (
  <Navbar id="menu" expand="lg" variant="dark" collapseOnSelect fixed="top" sticky="top">
    <Navbar.Brand><img src={Logo} alt="logo" className="logo-menu-mobile" /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-center">
      <Nav className="justify-content-center">
        <Navbar.Brand><img src={Logo} alt="logo" className="logo-menu" /></Navbar.Brand>
        <Nav.Item><Nav.Link href="#sobre">Sobre</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#programacao">Programação</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#palestrantes">Palestrantes</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#patrocinadores">Parceiros</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#inscricoes">Inscrições</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#contato">Contato</Nav.Link></Nav.Item>
      </Nav>
    </Navbar.Collapse>
    <div id="progress-bar"></div>
</Navbar>
); export default Menu;