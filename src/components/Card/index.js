import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

    render() {
        return (
            <div className="Card">
                <div className="Card-image" style={{ backgroundImage: `url(${this.props.img})` }}></div>
                <div className="Card-title">
                    <h4> {this.props.title} </h4>
                </div>
                <div className="Card-description">
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Card;
