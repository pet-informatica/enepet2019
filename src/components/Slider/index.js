import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import './Slider.css';
import "react-alice-carousel/lib/alice-carousel.css";

class MySlider extends Component {
    galleryItem = (item, i) => (
        <div 
            key={`key-${i}`}
            className="slider-image"
            style={{ 
                backgroundImage: `url(${item})`,
                backgroundSize: 'contain'
            }}>
        </div>
    )
      
    thumbItem = (item, i) => (
        <li key={i} onClick={() => this.Carousel._onDotClick(i)}>Thumb {item}</li>
    )

    /*
        Se quiser que tenha mais que um item na tela grande, alterar o 1024 para 2 ou 3
        Lembrar de testar o layout
    */
    responsive = {
        0: { items: 1 },
        600: { items: 1 },
        1024: { items: 1 },
      };

    render() {
        const items = this.props.images.map(this.galleryItem);
        const autoPlay = this.props.images.length > 1 ? true : false;
        return (    
            <div className="carousel">
                <AliceCarousel mouseDragEnabled
                    items={items}
                    autoPlay={autoPlay}
                    autoPlayInterval={this.props.speed}
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    responsive={this.responsive}
                >
                </AliceCarousel>
            </div>
        );
    }
}

export default MySlider;