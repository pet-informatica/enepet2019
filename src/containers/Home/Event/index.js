import React, { Component } from 'react';
import Card from '../../../components/Card';
import Title from '../../../components/Title';
import pdf from '../../../assets/imgs/pdf.svg';
import calendar from '../../../assets/imgs/calendar.svg';
import trabalho from '../../../assets/imgs/trabalho.svg';
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
                        size="50% 50%"
                        //link="https://drive.google.com/file/d/1gzQ0GRMhHZ65D0Bq7T1tN5WmUFeehCwS/view?usp=sharing"
                        description="Em breve...">
                    </Card>
                    <Card
                        title="Trabalhos"
                        img={trabalho}
                        size="50% 50%"
                        color="red"
                        description="Veja aqui o edital e o modelo de submissão dos trabalhos do PET PE 2018"
                        link="https://drive.google.com/drive/folders/1uH7Sp7KGfYNSGuZw9gP-Y8KEEin22QBy?usp=sharing"
                    >
                    </Card>
                    <Card
                        title="Oficinas"
                        img={pdf}
                        link="https://drive.google.com/drive/folders/1kFVoaYNaLbVIBsM2zwkhSyszXyZWfdpa?usp=sharing"
                        size="50% 50%"
                        color="blue"
                        description="Acesse o modelo de submissão das oficinas para o PET PE 2018">
                    </Card>
                    {/* <Card
                        title="Oficinas"
                        img={pdf}
                        link="https://drive.google.com/drive/folders/1kFVoaYNaLbVIBsM2zwkhSyszXyZWfdpa?usp=sharing"
                        size="50% 50%"
                        color="blue"
                        description="Em breve...">
                    </Card> */}
                </div>
            </div>
        );
    }
}

export default Event;
