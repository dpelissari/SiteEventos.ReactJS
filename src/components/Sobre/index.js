import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Sobre = () => (
    <div id="sobre" className="cont">
        <Container>
            <Row>
                <Col lg={12} xs={12} className="mb-2">
                    <h1 className="titulo-secao mt-4 animated fadeInLeftBig fast">What is Lorem Ipsum?</h1>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                        the undoubtable source.                   
                    </p>
                </Col>
            </Row>
            <Row className="d-flex align-items-center">
                <Col lg={6} md={12}>
                <h1 className="titulo-secao animated fadeInLeftBig slow">Where does it come from?</h1>
                    <p>
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                        comes from a line in section 1.10.32.
                    </p>
                    <p>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                        Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </Col>
                <Col lg={6} xs={12}>
                <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/eZXRIql6eO8" frameBorder="0" className="embed-responsive-item animated slideInLeft fast" title="Vídeo Interleite Sul"></iframe>
                    </div>
                </Col>
            </Row>
            
        </Container>
    </div>
); export default Sobre;