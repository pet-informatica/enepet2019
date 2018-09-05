import React, { Component } from 'react';
import down from '../../assets/imgs/arrow-down.png';
import up from '../../assets/imgs/arrow-up.png';
import './PanelTitle.css';

class PanelTitle extends Component {

    colors = {
        green: 'rgb(70, 178, 157)',
        blue: 'rgb(50, 77, 92)',
        yellow: 'rgb(240, 202, 77)',
        red: 'rgb(119, 42, 70)'
    }

    render() {
        const { img, title, eventKey, activeKey, color } = this.props;
        const arrow = (activeKey === eventKey ? up : down);

        return (
            <div className="PanelTitle" style={{backgroundColor: this.colors[color]}}>
                <div className="Panel-description">
                    <div 
                        className="Panel-image"
                        style={{
                            backgroundImage: `url(${img})`
                        }}
                    >
                    </div>
                <h1 className="Panel-heading">{title}</h1>
                </div>
                <div 
                    className="Panel-arrow"
                    style={{
                        backgroundImage: `url(${arrow})`
                    }}
                >
                </div>
            </div>
        );
    }
}

export default PanelTitle;
