import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navbar.css';
import iconWhite from '../../../assets/logos/Icon (white).png';

class CustomNavbar extends Component {

    render() {
        return (
            <Navbar fixedTop={true} collapseOnSelect id="navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a id="brand" href="/#">
                            <div className="iconDiv">
                                <img alt="icon" src={iconWhite}></img>
                            </div>
                            <div className ="brandName">ENEPET 2019</div>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem id="links" eventKey={1} href="#countdown">
                            Inscrição
                        </NavItem>
                        <NavItem id="links" eventKey={1} href="#about">
                            Sobre
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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;
