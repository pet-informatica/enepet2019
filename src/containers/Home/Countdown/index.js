import React, { Component } from 'react';
import Button from '../../../components/Button';
import './Countdown.css';

/* 20 de setembro de 2018, às 11h */
const data = new Date(2018, 8, 20, 11);

const addZero = (time => (time < 10 ? `0${time}` : time));

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
            <div className="Countdown">
                <div className="Countdown-timer">
                    <h1 className="Countdown-title">Faltam</h1>
                    <div className="Countdown-time">
                        <div className="Countdown-time-number">
                            <h3>{days}</h3>
                            <h5>dias</h5>
                        </div>
                        <div className="Countdown-time-number">
                            <h3>{addZero(hours)}</h3>
                            <h5>horas</h5>
                        </div>
                        <div className="Countdown-time-number">
                            <h3>{addZero(minutes)}</h3>
                            <h5>minutos</h5>
                        </div>
                        <div className="Countdown-time-number">
                            <h3>{addZero(seconds)}</h3>
                            <h5>segundos</h5>
                        </div>
                    </div>
                </div>
                <div className="Countdown-signup">
                    <Button name={"Inscreva-se!"} />
                </div>
            </div>
        );
    }
}

export default Countdown;
