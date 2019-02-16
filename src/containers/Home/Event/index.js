import React, { Component } from 'react';
import Card from '../../../components/Card';
import Title from '../../../components/Title';
import pdf from '../../../assets/imgs/pdf.svg';
import calendar from '../../../assets/imgs/calendar.1.svg';
import trabalho from '../../../assets/imgs/trabalho.svg';
import banner from '../../../assets/imgs/poster.svg';
import termo from '../../../assets/imgs/termo.png';
import bannerFile from '../../../assets/files/[Modelo] Banner - ENEPET 2019 Recife-PE.pptx';
import trabalhoFile from '../../../assets/files/[Modelo] Submissão - ENEPET 2019 Recife-PE.docx';
import termoCompromisso from '../../../assets/files/[Termo de Compromisso] Avaliador ENEPET 2019 Recife-PE.pdf';
import editalFile from '../../../assets/files/[Edital] Submissão de Resumos - ENEPET 2019 Recife-PE.pdf';
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
                        link=""
                        id="Event-1"
                        isMobile={this.props.isMobile}
                        avaiable={false}
                        >
                    </Card>
                    <Card
                        title="Edital"
                        img={pdf}
                        size="50% 100%"
                        color="red"
                        link={editalFile}
                        id="Event-2"
                        isMobile={this.props.isMobile}
                        avaiable={true}
                    >
                    </Card>
                    <Card
                        title="Modelo de submissão"
                        img={trabalho}
                        link={trabalhoFile}
                        size="50% 100%"
                        color="blue"
                        id="Event-3"
                        isMobile={this.props.isMobile}
                        avaiable={true}
                        >
                    </Card>
                    <Card
                        title="Banner"
                        img={banner}
                        link={bannerFile}
                        size="50% 100%"
                        color="blue"
                        id="Event-4"
                        isMobile={this.props.isMobile}
                        avaiable={true}
                        >
                    </Card>
                    <Card
                        title="Termo de Compromisso"
                        img={termo}
                        link={termoCompromisso}
                        size="50% 100%"
                        color="blue"
                        id="Event-5"
                        isMobile={this.props.isMobile}
                        avaiable={true}
                        >
                    </Card>
                </div>
            </div>
        );
    }
}

export default Event;
