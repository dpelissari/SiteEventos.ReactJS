import React from 'react';
import { Carousel } from 'react-bootstrap';

// fotos
import sld01 from '../../assets/img/slider/1.jpg';
import sld02 from '../../assets/img/slider/2.jpg';
import sld03 from '../../assets/img/slider/3.jpg';

const Slider = () => (
  <div id="home">
    <Carousel controls={false} interval={3000}  indicators={true} wrap={true}>

    <Carousel.Item>
      <img className="d-block w-100" src={sld01} alt="Imagem Evento"/>
      <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
        <h3 className="titulo-slider">Expo Event 2020</h3>
        <p className="caption-slider">O maior evento de tecnologia da américa latina.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={sld02} alt="Imagem Oportunidades" />
      <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
        <h3 className="titulo-slider">Oportunidades</h3>
        <p className="caption-slider">Durante o evento são oferecidos varias vagas de emprego</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={sld03} alt="Imagem Networking" />
      <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
        <h3 className="titulo-slider">Networking</h3>
        <p className="caption-slider">Uma boa opção para se conectar com nossas pessoas e tecnologias</p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  </div>
)
export default Slider;