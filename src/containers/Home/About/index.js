import React, { Component } from 'react';
import icon from '../../../assets/logos/Logo (short).png';
import bolo from '../../../assets/imgs/bolo1.png';
import './About.css';

class About extends Component {

    render() {
        const { isMobile } = this.props;
        const theme = '"Compartilhar é Resistir"'
        const subtheme = "Fortalecendo o programa através do compartilhamento de saberes"

        const size = isMobile ? "6vh" : "7vh";

        return (
            <div className="About" id="about">
                <div className="Title">
                    <h1 style={{ fontSize: size }} className="Title-heading">{theme}</h1>
                    <h1 className="Title-subheading"><b>{subtheme}</b></h1>
                </div>
                <div className="About-description">
                    <div className="About-text">
                        <p>&emsp;O ENEPET 2019 traz consigo uma ideia: compartilhar é resistir. Em seus sentidos latos, resistir tem sentido de conservar-se firme, de não ceder; e compartilhar significa arcar juntamente, tomar parte.</p> 
                            
                        <p>&emsp;Nós da organização do ENEPET, acreditamos que resistimos e mantemos o funcionamento do programa ao compartilhar experiências, ideias e conhecimentos sobre o ser petiana(o); que é por meio do diálogo entre grupos, CLAAs e outras e IES que conseguimos fortalecer o PET Nordeste; e que é na rotina das reuniões e atividades que entendemos o real significado do aprender fazendo e refletindo sobre.</p>

                        <p>&emsp;Assim, buscamos construir uma programação que abarcasse da melhor forma a realidade de todos os grupos, para que possamos juntos propor as mudanças que queremos e consolidar cada vez mais nosso programa. A gente se vê em Recife!</p>

                        <div className="About-bolo">
                            <div className="About-boloImg">
                                <img alt="bolo-de-rolo" style={{height: "100%"}} src={bolo}></img>
                            </div>

                            <div className="About-boloTxt">
                                <div className="About-boloTitle">
                                    <p style={{fontSize:"25px"}}><b>Bolo de rolo</b></p>
                                    <p><b>A hipnose pernambucana</b></p>
                                </div>
                                <p>&emsp;Ele mesmo, o que você comia quando era criança ou na casa da sua avó! A historiografia fala que o bolo de rolo chegou aqui pelos portugueses como um tipo de pão de ló. Mas como Pernambuco tinha coisa muito mais gostosa para adicionar, ao passar do tempo e com muita criatividade, as pessoas foram modificando a massa, resolveram colocar doce de goiaba como recheio e enrolar dessa maneira que conhecemos hoje.</p>

                                <p>&emsp;De acordo com a lei nº 13.436/2008, o bolo de rolo passou a ser considerado Patrimônio Cultural Imaterial do Estado de Pernambuco; mostrando que ele é mais uma de nossas várias práticas, conhecimentos e técnicas que, transmitidos ao longo do tempo, ajudam a construir aquilo que entendemos como identidade nordestina. </p>
                            </div>
                        </div>

                    </div>
                    <div
                        className="About-division"
                        style={{
                            height: (isMobile ? 1 : 500),
                            width: (isMobile ? '90%' : 1),
                            backgroundColor: 'lightgrey'
                        }}
                    >
                    </div>
                    <img alt="logo" src={icon} className="About-logo"></img>
                </div>
            </div>
        );
    }
}

export default About;
