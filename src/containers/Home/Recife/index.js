import React, { Component } from 'react';
import Card from '../../../components/Card';
import thumbnail from '../../../assets/imgs/thumbnail.svg';
import './Recife.css';

class Recife extends Component {

    render() {
        return (
            <div className="Recife">
                <div className="Recife-title">
                    <h1 className="Title-heading">Conheça Recife</h1>
                </div>
                <div className="Recife-attractions">
                    <Card
                        title="Attraction 1"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate.">
                    </Card>
                    <Card
                        title="Attraction 2"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate.">
                    </Card>
                    <Card
                        title="Attraction 3"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate.">
                    </Card>
                    <Card
                        title="Attraction 4"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputat.">
                    </Card>
                    <Card
                        title="Attraction 5"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate.">
                    </Card>
                    <Card
                        title="Attraction 6"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate.">
                    </Card>
                </div>
            </div>
        );
    }
}

export default Recife;
