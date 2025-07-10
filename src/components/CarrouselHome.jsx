import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carrousel.css';

import img2 from '../assets/Home2.jpg';
import img3 from '../assets/Home3.jpg';
import img4 from '../assets/Home4.jpg';
import img5 from '../assets/Home5.jpg';

function Carrousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const imagenes = [img2, img3, img4, img5];

  return (
    <div className="Carrousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imagenes.map((img, i) => (
          <Carousel.Item key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="d-block w-100"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Carrousel;
