import React, { Component } from 'react';
import Header from './Header';
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
                <Header isMobile={this.state.isMobile}></Header>
                Hi!
            </div>
        );
    }
}

export default Home;
