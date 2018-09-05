import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import Title from '../../../components/Title';
import PanelTitle from '../../../components/PanelTitle';
import PanelDescription from '../../../components/PanelDescription';
import comunicacao from '../../../assets/imgs/comunicacao.png';
import './Commissions.css';

class Commissions extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            activeKey: null
        };
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    render() {
        return (
            <div className="Commissions" id="commissions">
                <Title title="Comissões" />
                <div className="Commisions-body">
                    <PanelGroup accordion
                        id="accordion-example"
                        activeKey={this.state.activeKey}
                        onSelect={this.handleSelect}>
                        <Panel eventKey="1">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Infraestrutura e Logística"
                                        img={comunicacao}
                                        eventKey='1'
                                        activeKey={this.state.activeKey}
                                        color='blue'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription
                                    activities="A Comissão de Infraestrutura e Logística atua nas questões que envolvem o espaço físico do evento, por isso, é importante que essa comissão esteja sempre em contato com as demais para entender as necessidades do evento.
                                    Cabe a essa equipe as preocupações acerca da infraestrutura das salas e áreas onde ocorrerão as atividades do evento, portanto, levando em conta a instalação elétrica, presença de rede sem fio, disponibilidade de salas, controle de chaves, limpeza, etc. Além disso, é do escopo desta comissão as questões que envolvam o alojamento dos inscritos bem como o mínimo de bem estar, como presença de banheiros, entre outras.
                                    Cabe também a comissão se preocupar que o evento seja, em sua amplitude, acessível para todos e não desfavoreça qualquer pessoa que tenha uma necessidade especial."
                                    rep="Ramona Raissa | Conexões - Encontros Sociais"
                                    vice="Túlio Felipe | Geografia"
                                />
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="2">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Comunicação"
                                        img={comunicacao}
                                        eventKey='2'
                                        activeKey={this.state.activeKey}
                                        color='red'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                            <PanelDescription
                                    activities="A Comissão de Infraestrutura e Logística atua nas questões que envolvem o espaço físico do evento, por isso, é importante que essa comissão esteja sempre em contato com as demais para entender as necessidades do evento.
                                    Cabe a essa equipe as preocupações acerca da infraestrutura das salas e áreas onde ocorrerão as atividades do evento, portanto, levando em conta a instalação elétrica, presença de rede sem fio, disponibilidade de salas, controle de chaves, limpeza, etc. Além disso, é do escopo desta comissão as questões que envolvam o alojamento dos inscritos bem como o mínimo de bem estar, como presença de banheiros, entre outras.
                                    Cabe também a comissão se preocupar que o evento seja, em sua amplitude, acessível para todos e não desfavoreça qualquer pessoa que tenha uma necessidade especial."
                                    rep="Ramona Raissa | Conexões - Encontros Sociais"
                                    vice="Túlio Felipe | Geografia"
                                    tutors="Tutor 1 | Curso 1, Tutor 2 | Curso 2, Tutor 3 | Curso 3"
                                />
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="3">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Comunicação"
                                        img={comunicacao}
                                        eventKey='3'
                                        activeKey={this.state.activeKey}
                                        color='yellow'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable VHS.
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="4">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Comunicação"
                                        img={comunicacao}
                                        eventKey='4'
                                        activeKey={this.state.activeKey}
                                        color='green'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable VHS.
                            </Panel.Body>
                        </Panel>
                    </PanelGroup>
                </div>
            </div>
        );
    }
}

export default Commissions;
