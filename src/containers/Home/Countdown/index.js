import React, { Component } from 'react';
import Button from '../../../components/Button';
import './Countdown.css';

class Countdown extends Component {

    render() {
        return (
            <div className="Countdown">
                <div className="Countdown-timer">
                    Faltam
                    <div className="Countdown-timer-number">
                        12:10:10
                    </div>
                </div>
                <div className="Countdown-signup">
                    <Button name={"Inscreva-se!"}/>
                </div>
            </div>
        );
    }
}

export default Countdown;
