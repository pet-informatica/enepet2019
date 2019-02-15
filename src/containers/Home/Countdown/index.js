import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Button from '../../../components/Button';
import rosa from '../../../assets/imgs/snazzy-image.png'
import './Countdown.css';

/* 26 de abril de 2019, às 16h */
/* Nota: a contagem de meses começa em 0, portanto, lembre-se de subtrair 1 */
const data = new Date(2019, 3, 26, 16);
const dataString = "26 a 29 de abril"

const addZero = (time => (time < 10 ? `${time}` : time));
const checkPlural = ((name, time) => (time === 1 ? name.toUpperCase() : `${name.toUpperCase()}S`));
const link = "https://docs.google.com/forms/d/e/1FAIpQLSc8TXSf5hCuoLOQlXlP4eXMQi55hTbKby3-tsyTE5C5fHOfWA/viewform";

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
        this.interval = setInterval(this.calculateDifference, 1000);
    }

    calculateDifference() {
        let obj;
        const now = new Date();
        const diff = data - now;

        if (diff <= 0) {
            obj = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }

            clearInterval(this.interval);
        } else {
            const days = (diff / (1000 * 60 * 60 * 24));
            const hours = (diff / (1000 * 60 * 60)) % 24;
            const minutes = (diff / (1000 * 60)) % 60;
            const seconds = (diff / 1000) % 60;

            obj = {
                days: Math.floor(days),
                hours: Math.floor(hours),
                minutes: Math.floor(minutes),
                seconds: Math.floor(seconds)
            }
        }

        this.setState(obj);
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        const tooltip = (
            <Tooltip id="tooltip">
                <strong>Se prepare!</strong> De {dataString}.
            </Tooltip>
        )

        return (
            <div className="Countdown" style={{ backgroundImage: `url(${rosa})` }}>
                <div className="Countdown-body">
                    <h1 className="Countdown-title">XXXVII ENEPET 2019</h1>
                    <h3 className="Countdown-subtitle">{dataString}</h3>
                    <div className="Countdown-time">
                        <OverlayTrigger placement="top" overlay={tooltip}>
                            <div className="Countdown-time-number" id="days">
                                <h3>{days}</h3>
                                <h4>{checkPlural('dia', days)}</h4>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={tooltip}>
                            <div className="Countdown-time-number" id="hours">
                                <h3>{addZero(hours)}</h3>
                                <h4>{checkPlural('hora', hours)}</h4>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={tooltip}>
                            <div className="Countdown-time-number" id="minutes">
                                <h3>{addZero(minutes)}</h3>
                                <h4>{checkPlural('minuto', minutes)}</h4>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={tooltip}>
                            <div className="Countdown-time-number" id="seconds">
                                <h3>{addZero(seconds)}</h3>
                                <h4>{checkPlural('segundo', seconds)}</h4>
                            </div>
                        </OverlayTrigger>
                    </div>
                    <div className="Countdown-signup" style={{ backgroundColor: "white" }}>
                        <Button name={"Realize sua pré-inscrição!"} link={link}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Countdown;
