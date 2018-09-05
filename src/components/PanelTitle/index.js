import React, { Component } from 'react';
import down from '../../assets/imgs/arrow-down.png';
import up from '../../assets/imgs/arrow-up.png';
import './PanelTitle.css';

class PanelTitle extends Component {

    render() {
        const { img, title, eventKey, activeKey } = this.props;
        const arrow = (activeKey === eventKey ? up : down);

        return (
            <div className="PanelTitle">
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
