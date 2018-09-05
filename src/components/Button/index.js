import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        window.open(this.props.link);
    }

    render() {
        return (
            <div onClick={this.handleClick} className="Button">
                {this.props.name}
            </div>
        );
    }
}

export default Button;
