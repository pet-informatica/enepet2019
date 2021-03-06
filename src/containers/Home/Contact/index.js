import React, { Component } from 'react';
import Title from '../../../components/Title';
import ContactOption from '../../../components/ContactOption';
import facebook from '../../../assets/imgs/facebook.svg';
import instagram from '../../../assets/imgs/instagram.png';
import mail from '../../../assets/imgs/gmail.png';
import './Contact.css';

class Contact extends Component {

    render() {
        return (
            <div className="Contact" id="contact">
                <Title title="Contato" />
                <div className="Contact-body">
                    <ContactOption link="https://www.facebook.com/enepet2019" img={facebook} title="Facebook"/>
                    <ContactOption link="https://instagram.com/enepet2019" img={instagram} title="Instagram"/>
                    <ContactOption link="mailto:enepet2019@gmail.com" img={mail} title="Email"/>
                </div>
            </div>
        );
    }
}

export default Contact;
