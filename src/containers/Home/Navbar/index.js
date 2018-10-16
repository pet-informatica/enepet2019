import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navbar.css';

class CustomNavbar extends Component {

    render() {
        return (
            <Navbar fixedTop={true} collapseOnSelect id="navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a id="brand" href="/#">PET PE 2018</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem id="links" eventKey={1} href="#about">
                            Sobre
                        </NavItem>
                        <NavItem id="links" eventKey={2} href="#recife">
                            Recife
                        </NavItem>
                        <NavItem id="links" eventKey={2} href="#event">
                            Evento
                        </NavItem>
                        <NavItem id="links" eventKey={2} href="#commissions">
                            Comissões
                        </NavItem>
                        <NavItem id="links" eventKey={2} href="#contact">
                            Contato
                        </NavItem>
                        <NavItem id="links" eventKey={2} href="#sponsors">
                            Apoio
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;
