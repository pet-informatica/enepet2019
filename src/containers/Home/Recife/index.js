import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Recife.css';
import carousel from '../../../assets/imgs/carousel.png';

class Recife extends Component {

    render() {
        return (
            <div className="Recife">
                <Carousel>
                    <Carousel.Item>
                        <img width={1000} height={1000} alt="900x500" src={carousel} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1000} height={1000} alt="900x500" src={carousel} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1000} height={1000} alt="900x500" src={carousel} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Recife;
