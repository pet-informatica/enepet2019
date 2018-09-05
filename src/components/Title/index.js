import React, { Component } from 'react';
import './Title.css';

class Title extends Component {

    render() {
        return (
            <div className="Title">
                <h1 className="Title-heading">{this.props.title}</h1>
            </div>
        );
    }
}

export default Title;
