import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import Title from '../../../components/Title';
import PanelTitle from '../../../components/PanelTitle';
import PanelDescription from '../../../components/PanelDescription';
import comunicacao from '../../../assets/imgs/marketing.png';
import alimentacao from '../../../assets/imgs/alimentacao.png';
import cientifica from '../../../assets/imgs/cientifica.png';
import secretariado from '../../../assets/imgs/secretariado.png';
import financeira from '../../../assets/imgs/financeira.png';
import infraestrutura from '../../../assets/imgs/infraestrutura.png';
import integracao from '../../../assets/imgs/integracao.png';
import central from '../../../assets/imgs/central.png';
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
                                        img={infraestrutura}
                                        eventKey='1'
                                        activeKey={this.state.activeKey}
                                        color='blue'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription
                                    activities="Reserva do espaço físico do evento e garantia da infraestrutura necessária para comportar todos os que utilizarão deste espaço; garante a infraestrutura das salas e áreas onde ocorrerão as atividades, levando em conta a instalação elétrica, presença de rede sem fio (Wi-Fi) disponibilidade de salas, mobília, recursos multimídias, controle de chaves, limpeza, segurança, deslocamento/translados; resolve questões que envolvam alojamento dos inscritos, o seu bem-estar, a presença
                                    de banheiros (em perfeito funcionamento) e garante acessibilidade para os que necessitem."
                                    rep="Wesley Xavier | Parasitologia"
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
                                    rep="Henrique Caúla | Informática"
                                    vice="Pedro Basílio | Infomática"
                                />
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="3">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Financeira"
                                        img={financeira}
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
                                        title="Científica"
                                        img={cientifica}
                                        eventKey='4'
                                        activeKey={this.state.activeKey}
                                        color='green'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription 
                                activities="A Comissão Científica é responsável pela gerência da maior parte das atividades do ENEPET 2019 e, portanto, é desejável que ela tenha um número maior de membros. Cabe a essa comissão a pauta dos GDT’s (com base nas atas dos InterPETs de 2018) e da Assembleia, a organização e treinamento das mesas dessas atividades e a geração da ata final do evento.
                                Cabe também a essa comissão a seleção e organização de trabalhos a serem apresentados pelos inscritos, seja em pôster, apresentação oral ou oficina, além da emissão de certificados."
                                rep=" Maria Nascimento | Geografia"
                                vice="Yasmim Chagas | Ciências Sociais">
                                </PanelDescription>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="5">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Integração e Eventos"
                                        img={integracao}
                                        eventKey='5'
                                        activeKey={this.state.activeKey}
                                        color='blue'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription 
                                activities="A Comissão de Integração e Eventos trata das questões relacionadas ao bem estar dos inscritos e da integração dos mesmos. Nesse sentido, cabe a essa comissão a recepção dos inscritos no evento, bem como toda a organização referente aos eventos de integração, seja a cobrança ou não de ingresso à parte, o horário do evento (considerando as demais atividades do ENEPET), entre outras questões relacionadas."
                                rep="Tiago Morais | Mentor Aprendiz">
                                </PanelDescription>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="6">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Alimentação"
                                        img={alimentacao}
                                        eventKey='6'
                                        activeKey={this.state.activeKey}
                                        color='yellow'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription 
                                activities="A Comissão de Alimentação atua na gestão das refeições durante o evento para os seus participantes, tanto os membros da organização quanto os demais. Essa comissão deve se preocupar com a organização de refeições e coffee breaks, com toda a parte logística referente a aquisição e preservação dos alimentos, bem como deve se atentar para as questões nutricionais dos mesmos e para casos de restrições alimentares dos inscritos."
                                rep="Jéssika Cavalcanti lima | Química"
                                vice="Vinícius Firmino | Química">
                                </PanelDescription>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="7">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Secretariado"
                                        img={secretariado}
                                        eventKey='7'
                                        activeKey={this.state.activeKey}
                                        color='red'
                                        rep='Igor | Letras'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription 
                                activities="A Comissão de Secretariado é responsável pelo credenciamento dos participantes, levantamento de orçamento e confecção dos kits de boas-vindas, relatorias e declarações de caráter urgente para pessoas que precisem comprovar a presença no
                                evento devido a estágios e atividades acadêmicas, entre outros imprevistos."
                                >
                                </PanelDescription>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="8">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    <PanelTitle
                                        title="Comissão Central"
                                        img={central}
                                        eventKey='7'
                                        activeKey={this.state.activeKey}
                                        color='red'
                                    />
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <PanelDescription 
                                activities="A Comissão Central será formada por representantes de cada
                                uma das comissões restantes. Tendo como principal função o acompanhamento dos
                                trabalhos de todas elas, atentando-se aos seus cronogramas internos e ao cronograma
                                geral de organização do evento. Cabe também à Comissão Central deliberar sobre
                                questões que as demais comissões não possam decidir sozinhas, quer seja porque afetam
                                as outras comissões, quer seja porque afetem a estrutura central do evento como um
                                todo. Além disso, a Comissão Central definirá um cronograma de reuniões para a
                                socialização do andamento das atividades do evento, além de planejar o cronograma de
                                atividades referente ao evento, bem como administrar e coordenar algumas delas,
                                dialogando com as demais comissões."
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
