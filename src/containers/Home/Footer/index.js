import React, { Component } from 'react';
import thumbnail from '../../../assets/imgs/thumbnail.svg';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div className="Footer">
                <div className="Footer-body">
                    <h5>Copyright</h5>
                    <div className="Footer-logo" style={{backgroundImage: `url(${thumbnail})`}}>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
