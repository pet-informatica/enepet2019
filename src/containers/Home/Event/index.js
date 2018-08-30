import React, { Component } from 'react';
import Card from '../../../components/Card';
import Title from '../../../components/Title';
import thumbnail from '../../../assets/imgs/thumbnail.svg';
import './Event.css';

class Event extends Component {

    render() {
        return (
            <div className="Event">
                <Title title="Evento" />
                <div className="Event-body">
                    <Card
                        title="Attraction 1"
                        img={thumbnail}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend sem, sed pulvinar dui. Vestibulum facilisis, arcu sit amet gravida vulputate."
                        link="https://google.com"
                        buttonName="Google"
                    >
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

export default Event;
