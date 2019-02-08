import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

    colors = {
        green: 'rgb(70, 178, 157)',
        blue: 'rgb(50, 77, 92)',
        yellow: 'rgb(240, 202, 77)',
        red: 'rgb(119, 42, 70)'
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { link } = this.props;
        if (link) {
            window.open(link);
        }
    }

    render() {
        return (
            <div id={this.props.id} className="Card" onClick={this.handleClick}>
                <div
                    className="Card-image"
                    style={{ 
                        backgroundImage: `url(${this.props.img})`,
                        backgroundSize: (this.props.size ? this.props.size : 'cover') 
                    }}
                >
                </div>
                <div className="Card-title" style={{ color: "black" }}>
                    <h4> {this.props.title} </h4>
                </div>
                {/* <div className="Card-description">
                    <p>{this.props.description}</p>
                </div> */}
            </div>
        )
    }
}

export default Card;
