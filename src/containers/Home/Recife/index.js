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
                        title="Attraction 1"
                        img={facebook}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate."
                        color='green'
                        size='contain'
                    >
                    </Card>
                    <Card
                        title="Attraction 2"
                        img={rosa}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate."
                        color='blue'
                        size='cover'
                    >
                    </Card>
                    <Card
                        title="Attraction 3"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate."
                        color='red'
                    >
                    </Card>
                    <Card
                        title="Attraction 4"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputat."
                        color='yellow'
                    >
                    </Card>
                    <Card
                        title="Attraction 5"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate."
                        color='red'
                    >
                    </Card>
                    <Card
                        title="Attraction 6"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate."
                        color='blue'
                    >
                    </Card>
                </div>
            </div>
        );
    }
}

export default Recife;
