import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/images/slide_1.jpg'
import slide2 from '../assets/images/slide_2.jpg'
import slide3 from '../assets/images/slide_3.jpg'

function Hero() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="First slide"
                />

            </Carousel.Item><Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="First slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;