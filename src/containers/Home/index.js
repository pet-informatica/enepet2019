import React, { Component } from 'react';
import Navbar from './Navbar';
import Countdown from './Countdown';
import About from './About';
import Event from './Event';
import Contact from './Contact';
// import Schedule from './Schedule';
import Commissions from './Commissions';
import Footer from './Footer';
import './Home.css';
import '../../assets/bootstrap/css/bootstrap.min.css';

const mobileWidth = 1080;

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
                    <div className="Body-border">
                        <div id="Border-left" className="Border"></div>
                        <div className="Body-content">
                            <About isMobile={this.state.isMobile}/>
                            {/* <Schedule /> */}
                            <Event isMobile={this.state.isMobile} />
                            <Commissions />                            
                            <Contact />
                            <p style={{"textAlign": "center"}}>
                                <i>enepet2019@gmail.com</i><br/>
                                Desenvolvedor? <a href="https://github.com/pet-informatica/enepet2019">Reaproveite o código</a> deste website para o seu evento!
                            </p>
                        </div>
                        <div id="Border-right" className="Border"></div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;
