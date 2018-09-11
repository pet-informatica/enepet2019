import React, { Component } from 'react';
import Card from '../../../components/Card';
import Title from '../../../components/Title';
import thumbnail from '../../../assets/imgs/thumbnail.svg';
import facebook from '../../../assets/imgs/facebook-logo.png';
import google from '../../../assets/imgs/google.png';
import rosa from '../../../assets/imgs/rosa-dos-ventos-5.jpg';
import brennand from '../../../assets/imgs/brennand.jpg';
import parque from '../../../assets/imgs/parque_brennand.jpg';
import frevo from '../../../assets/imgs/frevo.jpg';
import artesanato from '../../../assets/imgs/artesanato.jpg';
import './Recife.css';

class Recife extends Component {

    render() {
        return (
            <div className="Recife" id="recife">
                <Title title="Conheça Recife" />
                <div className="Recife-attractions">
                    <Card
                        title="Instituto Ricardo Brennand"
                        img={brennand}
                        description="Eleito o Melhor Museu do Brasil no prêmio Traveler’s Choice Award, o museu Ricardo Brennand traz um acervo cultural único. O local ocupa uma propriedade gigante com castelo, biblioteca e pinacoteca. Detalhe, fica bem pertinho da UFPE - Campus Recife. Não vai perder esta oportunidade!"
                        color='green'
                        link="http://www.institutoricardobrennand.org.br/"
                        size='contain'
                    >
                    </Card>
                    <Card
                        title="Marco zero"
                        img={rosa}
                        description="O Marco Zero do Recife é uma praça que marca o local onde nasceu a cidade, à beira do Cais do Porto. Localizado no Bairro do Recife (ou Recife Antigo), o local é marcado por um painel do artista plástico Cícero Dias, instalado no chão."
                        color='blue'
                        size='cover'
                    >
                    </Card>
                    <Card
                        title="Centro de Artesanato"
                        img={artesanato}
                        description="Mesmo que a ideia não seja levar nada, entre e confira. Tem peças em barro, algodão, tecido, madeira, palha, couro e inúmeros outros materiais. E é ao lado do Marco Zero!"
                        color='red'
                        size='contain'
                    >
                    </Card>
                    <Card
                        title="Parque das Esculturas Francisco Brennand"
                        img={parque}
                        description="Com vista para o Marco Zero, o Parque de Esculturas de Francisco Brennand é acessível de barco a partir da praça.
                        A melhor forma de chegar até ele é pela navegação no Rio Capibaribe. Não são nem 5 minutinhos para ir do Marco Zero até o local, que fica à beira-mar, no molhe do porto."
                        color='yellow'
                    >
                    </Card>
                    <Card
                        title="Paço do Frevo"
                        img={frevo}
                        description="Outro museu dedicado às tradições nordestinas é o Museu Paço do Frevo. Ele fica no Recife Antigo, a poucos metros do Marco Zero, na Praça da Torre Malakoff. O espaço tem várias salas com exposições de letras, composições, trajes dos passistas e discos de frevo no centro de documentação. "
                        color='red'
                        size="contain"
                    >
                    </Card>
                </div>
            </div>
        );
    }
}

export default Recife;
