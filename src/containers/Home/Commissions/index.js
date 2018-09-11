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
                                        title="Comunicação e Marketing"
                                        img={comunicacao}
                                        eventKey='2'
                                        activeKey={this.state.activeKey}
                                        color='red'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                            <PanelDescription
                                    activities="A Comissão de Comunicação e Marketing é responsável por toda a parte de interação direta com o público-alvo do evento. Logo, as questões da criação de uma identidade visual para o evento e da personalização de materiais entregues aos inscritos cabem a esta equipe.
                                    Além disso, a criação e manutenção dos canais virtuais do evento (seja site, página em rede social ou outro meio) assim como o constante contato com os inscritos e coleta de feedback são do escopo da comissão. 
                                    Como serão a ponte entre os inscritos e a organização, esse grupo desse saber triar uma determinada dúvida para a comissão responsável e responder a quem perguntar."
                                    rep="Luana Melo | Geografia"
                                    vice="Erivaldo | Infoinclusão"
                                />
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="3">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Financeira"
                                        img={comunicacao}
                                        eventKey='3'
                                        activeKey={this.state.activeKey}
                                        color='yellow'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription
                                    activities="A Comissão Financeira é responsável pelas questões que envolvem os gastos do evento e a comprovação desses, visto que o PET é um programa que não pode manter o dinheiro para si.
                                    Cabe a essa comissão o planejamento de como e quanto será o custo da inscrição de cada participante, levando em conta os gastos com toda a estrutura do evento (para isso, é importantíssimo que esse grupo esteja sempre em contato com os outros). 
                                    Além disso, é dever desta comissão deliberar sobre a forma de guardar esse dinheiro e manter a transparência, a comprovação e o controle de todo o fluxo de dinheiro do evento."
                                    rep="Laisa Souza | Geografia"
                                    vice="Mateus Beltrão | Geografia">
                                </PanelDescription>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="4">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Infraestrutura e Logística"
                                        img={comunicacao}
                                        eventKey='4'
                                        activeKey={this.state.activeKey}
                                        color='green'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription 
                                activities="Comissão de Infraestrutura e Logística atua nas questões que envolvem o espaço físico do evento, por isso, é importante que essa comissão esteja sempre em contato com as demais para entender as necessidades do evento.
                                Cabe a essa equipe as preocupações acerca da infraestrutura das salas e áreas onde ocorrerão as atividades do evento, portanto, levando em conta a instalação elétrica, presença de rede sem fio, disponibilidade de salas, controle de chaves, limpeza, etc. Além disso, é do escopo desta comissão as questões que envolvam o alojamento dos inscritos bem como o mínimo de bem estar, como presença de banheiros, entre outras.
                                Cabe também a comissão se preocupar que o evento seja, em sua amplitude, acessível para todos e não desfavoreça qualquer pessoa que tenha uma necessidade especial."
                                rep="Ramona Raissa | Conexões - Encontros Sociais"
                                vice="Túlio Felipe | Geografia">
                                </PanelDescription>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="5">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Integração e Eventos"
                                        img={comunicacao}
                                        eventKey='5'
                                        activeKey={this.state.activeKey}
                                        color='blue'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription 
                                activities="A Comissão de Integração e Eventos trata das questões relacionadas ao bem estar dos inscritos e da integração dos mesmos. Nesse sentido, cabe a essa comissão a recepção dos inscritos no evento, bem como toda a organização referente aos eventos de integração, seja a cobrança ou não de ingresso à parte, o horário do evento (considerando as demais atividades do PET PE), entre outras questões relacionadas."
                                rep="Cynthia Patrícia | Conexões - GPP"
                                vice="Tiago Morais | Mentor Aprendiz">
                                </PanelDescription>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="6">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Alimentação"
                                        img={comunicacao}
                                        eventKey='6'
                                        activeKey={this.state.activeKey}
                                        color='yellow'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription 
                                activities="A Comissão de Alimentação atua na gestão das refeições durante o evento para os seus participantes, tanto os membros da organização quanto os demais. Essa comissão deve se preocupar com a organização de refeições e coffee breaks, com toda a parte logística referente a aquisição e preservação dos alimentos, bem como deve se atentar para as questões nutricionais dos mesmos e para casos de restrições alimentares dos inscritos."
                                rep="Lara Arruda | Conexões - Encontros Sociais"
                                vice="Sayonara Maria | Química">
                                </PanelDescription>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="7">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Comissão Central"
                                        img={comunicacao}
                                        eventKey='7'
                                        activeKey={this.state.activeKey}
                                        color='red'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription 
                                activities="A Comissão Central não tem um representante, ela é formada pelos das outras comissões e pelos representantes discentes do PET na UFPE.
                                Sua principal função é acompanhar o trabalho de todas as demais comissões, atentando-se aos seus cronogramas internos e ao cronograma geral ao longo das quinzenas do ano de 2018 até a data do PET PE 2018. Cabe também à Comissão Central deliberar sobre questões que as demais comissões não podem decidir sozinhas, quer seja porque afetam as outras comissões, quer seja porque afetem a estrutura central do evento todo. Além disso, cabe a Comissão Central definir o cronograma de atividades do evento e de InterPETs ao longo do ano, com base no trabalho feito pelas outras comissões, e todas as informações necessárias para a inscrição de alguém, com base no pedido das outras comissões."
                                >
                                </PanelDescription>
                            </Panel.Body>
                        </Panel>
                    </PanelGroup>
                </div>
            </div>
        );
    }
}

export default Commissions;
