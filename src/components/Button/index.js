import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    render() {
        return (
            <div onClick={this.props.handleClick} className="Button">
                {this.props.name}
            </div>
        );
    }
}

export default Button;
