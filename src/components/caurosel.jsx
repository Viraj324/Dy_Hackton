import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./caurosel.css"
import club_ii from '../assets/cr_img/club3.jpg'
import pict_mm from '../assets/cr_img/pictmum.jpg'
import pict_picto from '../assets/cr_img/picto.png'
import pict_nss from '../assets/cr_img/pictnss.jpeg'

function Carouselv() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="slide"
          src={club_ii}
          alt="First slide"
        />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide"
          src={pict_mm}
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide"
          src={pict_picto}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide"
          src={pict_nss}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide"
          src={pict_nss}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselv;