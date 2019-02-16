import React, { Component } from 'react';
import Card from '../../../components/Card';
import Title from '../../../components/Title';
import pdf from '../../../assets/imgs/pdf.svg';
import calendar from '../../../assets/imgs/calendar.svg';
import trabalho from '../../../assets/imgs/trabalho.svg';
import banner from '../../../assets/imgs/poster.svg'
import './Event.css';

class Event extends Component {

    render() {
        return (
            <div className="Event" id="event">
                <Title title="Evento" />
                <div className="Event-body">
                    <Card
                        title="Cronograma"
                        img={calendar}
                        color="yellow"
                        size="50% 100%"
                        link="https://drive.google.com/file/d/14sGsq_mTI_De8xubnA5bStccFK4spcwu/view?usp=sharing"
                        id="Event-1"
                        isMobile={this.props.isMobile}
                        avaiable={false}
                        >
                    </Card>
                    <Card
                        title="Edital"
                        img={trabalho}
                        size="50% 100%"
                        color="red"
                        link="https://drive.google.com/drive/folders/1uH7Sp7KGfYNSGuZw9gP-Y8KEEin22QBy?usp=sharing"
                        id="Event-2"
                        isMobile={this.props.isMobile}
                        avaiable={false}
                    >
                    </Card>
                    <Card
                        title="Oficinas"
                        img={pdf}
                        link="https://drive.google.com/drive/folders/1kFVoaYNaLbVIBsM2zwkhSyszXyZWfdpa?usp=sharing"
                        size="50% 100%"
                        color="blue"
                        id="Event-3"
                        isMobile={this.props.isMobile}
                        avaiable={false}
                        >
                    </Card>
                    <Card
                        title="Banner"
                        img={banner}
                        link="https://drive.google.com/drive/folders/1MH0OQN-K3sumv6vRFlJa7AMTWqDCP9z8?usp=sharing"
                        size="50% 100%"
                        color="blue"
                        id="Event-4"
                        isMobile={this.props.isMobile}
                        avaiable={false}
                        >
                    </Card>
                </div>
            </div>
        );
    }
}

export default Event;
