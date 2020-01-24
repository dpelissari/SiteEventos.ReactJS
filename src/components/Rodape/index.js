import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import Formulario from '../FormContato/index';

export default class Rodape extends React.Component {
    render() {
        return (
            <div id="rodape">
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <h2>Redes sociais</h2>
                            <p>Acompanhe nosso trabalho pelas redes sociais</p>
                            <ul className="icons-redes-sociais">
                                <li><a href="https://www.facebook.com/dkalebe" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                                <li><a href="https://twitter.com/DanielPelissar" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/danielkalebe/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/daniel-pelissari-ba8082145/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4} className="mb-4">
                            <h2>Local</h2>
                            <p className="mb-1">Centro de Cultura e Eventos Plínio Arlindo de Nes</p>
                            <p className="mb-1">R. Assis Brasil, 20 D Centro, Chapecó - SC.</p>
                            <p className="mt-2 text-center">Para mais informações: </p>
                            <p className="mb-1 mt-1 text-center"><i className="fa fa-phone" aria-hidden="true"></i> (19) 3434-3232 | <i className="fa fa-phone" aria-hidden="true"></i> (19) 9.9999-8888 </p>
                            <p className="mb-1 mt-1 text-center"><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:eventos@email.com.br?subject=Contato ExpoEvent 2020"> eventos@email.com.br</a></p>
                            <p className="mb-1"></p>
                        </Col>
                        <Col xs={12} md={4} id="form-contato">
                            <h2>Contato</h2>
                            <Formulario />
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
};