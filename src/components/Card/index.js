import React, { Component } from 'react';
import Button from '../Button';
import './Card.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton() {
        window.open(this.props.link);
    }

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
                {this.props.link ? (
                    <div className="Card-button">
                        <Button handleClick={this.handleButton} name={this.props.buttonName}></Button>
                    </div>
                ) : ""}
            </div>
        )
    }
}

export default Card;
