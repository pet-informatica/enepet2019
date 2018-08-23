import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {

        console.log(this.props);

        const desktop = (
            <div className="Header Header-desktop">
                <div className="Header-logo Header-logo-desktop">
                    Header logo
                </div>
                <div className="Header-options Header-options-desktop">
                    <div className="Header-option Header-option-desktop">
                        Header option 1
                    </div>
                    <div className="Header-option Header-option-desktop">
                        Header option 2
                    </div>
                    <div className="Header-option Header-option-desktop">
                        Header option 3
                    </div>
                    <div className="Header-option Header-option-desktop">
                        Header option 4
                    </div>
                    <div className="Header-option Header-option-desktop">
                        Header option 5
                    </div>
                </div>
            </div>
        )

        return desktop;
    }
}

export default Header;
