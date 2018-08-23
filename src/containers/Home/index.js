import React, { Component } from 'react';
import Header from './Header';
import '../../assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
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
                Home!
            </div>
        );
    }
}

export default Home;
