import React, { Component } from 'react';
import Title from '../../../components/Title';
import ContactOption from '../../../components/ContactOption';
import thumbnail from '../../../assets/imgs/thumbnail.svg';
import './Contact.css';

class Contact extends Component {

    render() {
        return (
            <div className="Contact">
                <Title title="Contato" />
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
