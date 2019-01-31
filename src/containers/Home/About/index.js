import React, { Component } from 'react';
import Title from '../../../components/Title';
import icon from '../../../assets/logos/Icon.png';
import './About.css';

class About extends Component {

    render() {
        const { isMobile } = this.props;
        const theme = '"Resistir é compartilhar"'
        const subtheme = "Fortalecendo o programa através do compartilhamento de saberes"

        const size = isMobile ? "6vh" : "7vh";

        return (
            <div className="About" id="about">
                <div className="Title">
                    <h1 style={{fontSize: size}} className="Title-heading">{theme}</h1>
                    <h1 className="Title-subheading"><i>{subtheme}</i></h1>
                </div>
                <div className="About-description">
                <div className="About-text">
                        <p>&emsp;Anualmente o Encontro do Programa de Educação Tutorial em Pernambuco reúne PETianos discentes, docentes e egressos de diversos grupos PET do estado para discutir questões sociais, políticas e acadêmicas que rodeiam o Programa, sendo um importante momento para o fortalecimento e o reconhecimento do mesmo.</p>
                        <br/>
                        <p>&emsp;Após as duas últimas edições aconteceram no interior do Estado, em 2018 o PET PE volta à capital pernambucana em sua 20ª edição, sendo a Universidade Federal de Pernambuco (UFPE) a grande anfitriã. Com o tema “Ponto de Partida da Integração PETiana”, o evento que acontecerá nos dias 16, 17 e 18 de novembro e visa fortalecer e estabelecer um maior diálogo entre os grupos PET do estado.</p>
                        <br />
                        <p>&emsp;Na programação serão abrangidos diversos conteúdos relacionados ao contexto atual do programa, assim como momentos de integração e um espaço para apresentação de trabalhos, estimulando a troca de experiências e um maior reconhecimento do que é produzido pelos grupos no decorrer do ano.</p>
                    </div>
                    <div 
                        className="About-division"
                        style={{
                            height: (isMobile ? 1 : 200),
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
