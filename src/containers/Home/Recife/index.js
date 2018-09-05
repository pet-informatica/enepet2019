import React, { Component } from 'react';
import Card from '../../../components/Card';
import Title from '../../../components/Title';
import thumbnail from '../../../assets/imgs/thumbnail.svg';
import facebook from '../../../assets/imgs/facebook-logo.png';
import rosa from '../../../assets/imgs/rosa-dos-ventos-5.jpg';
import './Recife.css';

class Recife extends Component {

    render() {
        return (
            <div className="Recife" id="recife">
                <Title title="Conheça Recife" />
                <div className="Recife-attractions">
                    <Card
                        title="PNG redonda"
                        img={facebook}
                        description="Este card é um exemplo de imagem redonda com PNG. Passe a prop 'size' com valor 'contain' para que a imagem fique responsível."
                        color='green'
                        size='contain'
                    >
                    </Card>
                    <Card
                        title="Imagem completa"
                        img={rosa}
                        description="Este card é um exemplo de imagem completa. Passe a prop 'size' com valor 'cover' para que a imagem fique responsível."
                        color='blue'
                        size='cover'
                    >
                    </Card>
                    <Card
                        title="Link"
                        img={thumbnail}
                        description="Exemplo de link. Passe a prop 'link' com o valor do link que você deseje que este card leve."
                        color='red'
                        link='google.com'
                    >
                    </Card>
                    <Card
                        title="Texto curto"
                        img={thumbnail}
                        description="Um exemplo de texto curto."
                        color='yellow'
                    >
                    </Card>
                    <Card
                        title="Texto médio"
                        img={thumbnail}
                        description="Um exemplo de texto médio. Um exemplo de texto médio. Um exemplo de texto médio."
                        color='red'
                    >
                    </Card>
                    <Card
                        title="Texto longo"
                        img={thumbnail}
                        description="Não passe dessa quantidade de palavras! Não passe dessa quantidade de palavras! Não passe dessa quantidade de palavras! Não passe dessa quantidade de palavras! Não passe dessa quantidade de palavras! Não passe dessa quantidade de palavras!"
                        color='blue'
                    >
                    </Card>
                </div>
            </div>
        );
    }
}

export default Recife;
