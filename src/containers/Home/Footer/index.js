import React, { Component } from 'react';
import logo from '../../../assets/logos/logo.png';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div className="Footer">
                <div className="Footer-body">
                    <h5>Copyright</h5>
                    <img alt="logo" className="Footer-logo" src={logo}></img>
                </div>
            </div>
        );
    }
}

export default Footer;
