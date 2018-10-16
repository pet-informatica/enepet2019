import React, { Component } from 'react';
import MySlider from '../../../components/Slider'
import Title from '../../../components/Title';
import even3 from '../../../assets/imgs/even3.png'
import './Sponsors.css'

class Sponsors extends Component {
    render(){
        const imgs = [even3];
        return (
            <div className="Sponsors" id="sponsors">
                <Title title="Apoio"></Title>
                <MySlider speed={2000} images={imgs}></MySlider>
            </div>
        );
    }
}

export default Sponsors;