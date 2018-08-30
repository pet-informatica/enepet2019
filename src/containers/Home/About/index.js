import React, { Component } from 'react';
import './About.css';

class About extends Component {

    render() {
        return (
            <div className="About">
                <div className="About-title">
                    <h1 className="Title-heading">Sobre</h1> 
                </div>
                <div className="About-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ligula quis augue eleifend fermentum. Maecenas lobortis dapibus tellus sit amet commodo. Duis placerat neque diam, in efficitur nisl commodo eu. Duis volutpat ac enim at elementum. Phasellus sit amet neque sit amet eros sagittis ornare. Sed vitae diam nibh. Sed semper, enim viverra facilisis mattis, tortor libero aliquet nisl, euismod commodo nunc ex eget elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum fermentum sapien libero, quis sollicitudin mauris tincidunt non. Etiam erat leo, pharetra vitae ligula nec, interdum scelerisque elit. Aenean ornare tellus vel metus blandit, at maximus elit ullamcorper. Sed porta erat nunc, in fringilla erat sodales ut.</p> 
                </div>
            </div>
        );
    }
}

export default About;
