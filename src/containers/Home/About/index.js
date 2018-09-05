import React, { Component } from 'react';
import Title from '../../../components/Title';
import logo from '../../../assets/logos/logo.png';
import './About.css';

class About extends Component {

    render() {
        const { isMobile } = this.props;

        return (
            <div className="About" id="about">
                <Title title="Sobre"></Title>
                <div className="About-description">
                <div className="About-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ligula quis augue eleifend fermentum. Maecenas lobortis dapibus tellus sit amet commodo. Duis placerat neque diam, in efficitur nisl commodo eu. Duis volutpat ac enim at elementum. Phasellus sit amet neque sit amet eros sagittis ornare. Sed vitae diam nibh. Sed semper, enim viverra facilisis mattis, tortor libero aliquet nisl, euismod commodo nunc ex eget elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum fermentum sapien libero, quis sollicitudin mauris tincidunt non. Etiam erat leo, pharetra vitae ligula nec, interdum scelerisque elit. Aenean ornare tellus vel metus blandit, at maximus elit ullamcorper. Sed porta erat nunc, in fringilla erat sodales ut.</p>
                    </div>
                    <div 
                        className="About-division"
                        style={{
                            height: (isMobile ? 1 : 200),
                            width: (isMobile ? '90%' : 1),
                            backgroundColor: 'lightgrey'
                        }}
                    >
                    </div>
                    <img src={logo} className="About-logo"></img>
                </div>
            </div>
        );
    }
}

export default About;
