import React, { Component } from 'react';
import ContactOption from '../../../components/ContactOption';
import thumbnail from '../../../assets/imgs/thumbnail.svg';
import './Contact.css';

class Contact extends Component {

    render() {
        return (
            <div className="Contact">
                <div className="Contact-title">
                    <h1 className="Title-heading">Contato</h1>
                </div>
                <div className="Contact-body">
                    <ContactOption link="https://facebook.com" img={thumbnail} title="Facebook"/>
                    <ContactOption link="https://facebook.com" img={thumbnail} title="Facebook"/>
                    <ContactOption link="https://facebook.com" img={thumbnail} title="Facebook"/>
                    <ContactOption link="https://facebook.com" img={thumbnail} title="Facebook"/>
                </div>
            </div>
        );
    }
}

export default Contact;
