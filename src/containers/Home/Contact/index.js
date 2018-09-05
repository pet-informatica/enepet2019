import React, { Component } from 'react';
import Title from '../../../components/Title';
import ContactOption from '../../../components/ContactOption';
import facebook from '../../../assets/imgs/facebook-logo.png';
import twitter from '../../../assets/imgs/twitter.png';
import mail from '../../../assets/imgs/mail.png';
import './Contact.css';

class Contact extends Component {

    render() {
        return (
            <div className="Contact" id="contact">
                <Title title="Contato" />
                <div className="Contact-body">
                    <ContactOption link="https://facebook.com" img={facebook} title="Facebook"/>
                    <ContactOption link="https://twitter.com" img={twitter} title="Twitter"/>
                    <ContactOption link="mailto:test@email.com" img={mail} title="Email"/>
                </div>
            </div>
        );
    }
}

export default Contact;
