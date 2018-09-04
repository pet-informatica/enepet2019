import React, { Component } from 'react';
import Button from '../../../components/Button';
import rosa from '../../../assets/imgs/rosa-dos-ventos-5.jpg'
import './Countdown.css';

const colors = ['rgb(70, 178, 157)', 'rgb(50, 77, 92)', 'rgb(119, 42, 70)'];

/* 20 de setembro de 2018, às 11h */
const data = new Date(2018, 8, 20, 11);

const addZero = (time => (time < 10 ? `0${time}` : time));
const checkPlural = ((name, time) => (time === 1 ? name : `${name}s`));

class Countdown extends Component {

    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    constructor(props) {
        super(props);
        this.calculateDifference = this.calculateDifference.bind(this);

        this.buttonColor = colors[Math.floor(Math.random() * 3)];
    }

    componentDidMount() {
        this.calculateDifference();
        setInterval(this.calculateDifference, 1000);
    }

    calculateDifference() {
        const now = new Date();
        const diff = data - now;
        const days = (diff / (1000 * 60 * 60 * 24));
        const hours = (diff / (1000 * 60 * 60)) % 24;
        const minutes = (diff / (1000 * 60)) % 60;
        const seconds = (diff / 1000) % 60;

        this.setState({
            days: Math.floor(days),
            hours: Math.floor(hours),
            minutes: Math.floor(minutes),
            seconds: Math.floor(seconds)
        });
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <div className="Countdown" style={{ backgroundImage: `url(${rosa})` }}>
                <div className="Countdown-body">
                    <h1 className="Countdown-title">Faltam</h1>
                    <div className="Countdown-time">
                        <div className="Countdown-time-number" id="days">
                            <h3>{days}</h3>
                            <h4>{checkPlural('dia', days)}</h4>
                        </div>
                        <div className="Countdown-time-number" id="hours">
                            <h3>{addZero(hours)}</h3>
                            <h4>{checkPlural('hora', hours)}</h4>
                        </div>
                        <div className="Countdown-time-number" id="minutes">
                            <h3>{addZero(minutes)}</h3>
                            <h4>{checkPlural('minuto', minutes)}</h4>
                        </div>
                        <div className="Countdown-time-number" id="seconds">
                            <h3>{addZero(seconds)}</h3>
                            <h4>{checkPlural('segundo', seconds)}</h4>
                        </div>
                    </div>
                    <div className="Countdown-signup" style={{ backgroundColor: this.buttonColor }}>
                        <Button name={"Inscreva-se!"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Countdown;
