import React from 'react';
import { Carousel } from 'react-bootstrap';
import Typed from 'react-typed';
import sld01 from '../../assets/img/home/1.jpg';

const Home = () => (
  <div id="home">
    <Carousel controls={false} interval={3000}  indicators={false} wrap={true}>
      <Carousel.Item>
        <img className="d-block w-100" src={sld01} alt="Imagem Evento"/>
        <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
        <h1 className="titulo-slider">ExpoEvent Pro</h1>
        <Typed className="caption-slider" strings={['Lorem Ipsum is simply dummy text of the printing ']} typeSpeed={40} stopped={false} />
        <h2 className="local-evento"><i className="fa fa-map-marker"></i>&nbsp;Centro de Cultura e Eventos Plínio Arlindo de Nes | Chapecó -SC</h2>
        <h3 className="data-evento"><i className="fa fa-calendar"></i>&nbsp;13 e 14 de maio</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
); export default Home;