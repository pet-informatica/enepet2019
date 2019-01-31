import React, { Component } from 'react';
import './Title.css';

class Title extends Component {

    render() {
        const subtitle = this.props.subtitle
        const sub = subtitle ? (<h1 className="Title-subheading">{subtitle}</h1>) : ""

        return (
            <div className="Title">
                <h1 className="Title-heading">{this.props.title}</h1>
                {sub}
            </div>
        );
    }
}

export default Title;
