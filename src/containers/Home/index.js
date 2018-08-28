import React, { Component } from 'react';
import Navbar from './Navbar';
import Countdown from './Countdown';
import About from './About';
import Recife from './Recife';
import Event from './Event';
import Contact from './Contact';
import Commissions from './Commissions';
import Schedule from './Schedule';
import Footer from './Footer';
import './Home.css';
import '../../assets/bootstrap/css/bootstrap.min.css';

const mobileWidth = 500;

class Home extends Component {

    state = {
        isMobile: this.checkIfMobile()
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ isMobile: this.checkIfMobile() });
        });
    }

    checkIfMobile() {
        return (window.innerWidth < mobileWidth);
    }

    render() {
        return (
            <div className="Home">
                <Navbar />
                <div className="Body">
                    <Countdown />
                    <About />
                    <Recife />
                    <Event />
                    <Schedule />
                    <Commissions />
                    <Contact />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;
