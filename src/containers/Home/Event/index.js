import React, { Component } from 'react';
import Card from '../../../components/Card';
import Title from '../../../components/Title';
import pdf from '../../../assets/imgs/pdf.svg';
// import calendar from '../../../assets/imgs/calendar.1.svg';
import trabalho from '../../../assets/imgs/trabalho.svg';
import banner from '../../../assets/imgs/poster.svg';
import termo from '../../../assets/imgs/termo.png';
import gear from '../../../assets/imgs/gear.png';
import people from '../../../assets/imgs/people.png';
import spotifyLogo from '../../../assets/imgs/spotify.png';

import gdtsFile from '../../../assets/files/GDTs atualizados 2019.pdf';
import bannerFile from '../../../assets/files/[Modelo] Banner - ENEPET 2019 Recife-PE.pptx';
import trabalhoFile from '../../../assets/files/[Modelo] Submissão - ENEPET 2019 Recife-PE.docx';
import termoCompromisso from '../../../assets/files/[Termo de Compromisso] Avaliador ENEPET 2019 Recife-PE.pdf';
import editalFile from '../../../assets/files/[Edital] Submissão de Resumos - ENEPET 2019 Recife-PE.pdf';
import oficinaModel from '../../../assets/files/(ENEPET) MODELO DE SUBMISSÃO DE OFICINAS E MINICURSOS AO XVIII ENCONTRO NORDESTINO DOS GRUPOS PET – PERNAMBUCO (XVIII ENEPET) (1).docx';
import oficinaEdital from '../../../assets/files/(ENEPET) EDITAL PARA SUBMISSÃO DE OFICINAS E MINICURSOS AO XVIII ENCONTRO NORDESTINO DOS GRUPOS PET – PERNAMBUCO (XVIII ENEPET).pdf';

import './Event.css';

const spotifyLink = 'https://open.spotify.com/user/thelittlenavyboy/playlist/4ePFVPrGb8jA8pa1gAh04i?si=7V8tkw75RQ69zq-l-QQO3g';

class Event extends Component {

    render() {
        return (
            <div className="Event" id="event">
                <Title title="Evento" />
                <div className="Event-body">
                    {/* <Card
                        title="Cronograma"
                        img={calendar}
                        color="yellow"
                        size="50% 100%"
                        link=""
                        id="Event-first"
                        isMobile={this.props.isMobile}
                        avaiable={false}
                        >
                    </Card> */}
                    <Card
                        title="Playlist da festa"
                        img={spotifyLogo}
                        link={spotifyLink}
                        size="50% 100%"
                        color="blue"
                        id="Event-first"
                        isMobile={this.props.isMobile}
                        avaiable={true}
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
                        title="GDT's"
                        img={people}
                        link={gdtsFile}
                        size="50% 100%"
                        color="blue"
                        id="Event-5"
                        isMobile={this.props.isMobile}
                        avaiable={true}
                        >
                    </Card>
                    <Card
                        title="Oficinas - Edital"
                        img={gear}
                        link={oficinaEdital}
                        size="50% 100%"
                        color="blue"
                        id="Event-6"
                        isMobile={this.props.isMobile}
                        avaiable={true}
                        >
                    </Card>
                    <Card
                        title="Oficinas - Modelo"
                        img={trabalho}
                        link={oficinaModel}
                        size="50% 100%"
                        color="blue"
                        id="Event-7"
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
                        id="Event-last"
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
