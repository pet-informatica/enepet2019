import React, { Component } from 'react';
import Navbar from './Navbar';
import './Home.css';

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
                <Navbar isMobile={this.state.isMobile}></Navbar>
                Home!
            </div>
        );
    }
}

export default Home;
