import React, { Component } from 'react';
import './ContactOption.css';

class ContactOption extends Component {

    render() {
        return (
            <div className="Contact-option">
                <div
                    className="Contact-img"
                    style={{ backgroundImage: `url(${this.props.img})` }}
                    onClick={() => window.open(this.props.link)}
                >
                </div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default ContactOption;
