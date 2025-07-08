import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carrousel.css';
//https://react-bootstrap.netlify.app/docs/components/carousel   (Controlled)
function Carrousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='Carrousel'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img src ="./src/assets/Home1.jpg" />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src ="./src/assets/Home2.jpg" />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src ="./src/assets/Home3.jpg" />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src ="./src/assets/Home4.jpg" />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src ="./src/assets/Home5.jpg" />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Carrousel;