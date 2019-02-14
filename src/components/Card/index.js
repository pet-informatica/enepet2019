import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
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

        const { isMobile } = this.props;
        const className = (isMobile ? "Card-mobile" : "Card-desktop")

        const tooltip = (
            <Tooltip id="tooltip">
                Clique para baixar
            </Tooltip>
        )

        return (
            <OverlayTrigger placement="top" overlay={tooltip}>
                <div id={this.props.id} className={className} onClick={this.handleClick}>
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
                </div>
            </OverlayTrigger>
        )
    }
}

export default Card;
