import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import Formulario from '../FormContato/Form';

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
                                <li><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
                                <li><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
                                <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                <li><i className="fa fa-linkedin-square" aria-hidden="true"></i></li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4} className="mb-4">
                            <h2>Localização</h2>
                            <p>Centro de Cultura e Eventos Plínio Arlindo de Nes.</p>
                            <p>R. Assis Brasil, 20 D Centro, Chapecó - SC</p>
                            <p>Fone para contato: (19) 3432-2199</p>
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
}