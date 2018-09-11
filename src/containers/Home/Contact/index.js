import React, { Component } from 'react';
import Title from '../../../components/Title';
import ContactOption from '../../../components/ContactOption';
import facebook from '../../../assets/imgs/facebook-logo.png';
import instagram from '../../../assets/imgs/instagram.png';
import mail from '../../../assets/imgs/mail.png';
import './Contact.css';

class Contact extends Component {

    render() {
        return (
            <div className="Contact" id="contact">
                <Title title="Contato" />
                <div className="Contact-body">
                    <ContactOption link="https://www.facebook.com/petpe2018" img={facebook} title="Facebook"/>
                    <ContactOption link="https://instagram.com/petpe2018" img={instagram} title="Instagram"/>
                    <ContactOption link="mailto:petpe2018@gmail.com" img={mail} title="Email"/>
                </div>
            </div>
        );
    }
}

export default Contact;
