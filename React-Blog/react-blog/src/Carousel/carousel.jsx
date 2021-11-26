import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import universe from './images/universespider.jpeg';
import space from './images/spacespider.jpeg';
import newyork from './images/newyorkspider.jpeg';
import './carousel.css';


export default function carousel() {
    return (
        <Carousel className="carousel">
            <Carousel.Item>
                <img className="image" src={universe} alt="" />
                <Carousel.Caption>
                    <h3>Universal Chaos</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="image" src={space} alt="" />
                <Carousel.Caption>
                    <h3>Space Adventure</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="image" src={newyork} alt="" />
                <Carousel.Caption>
                    <h3>The Hero from Queens</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

