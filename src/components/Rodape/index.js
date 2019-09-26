import React from 'react';
import Iframe from 'react-iframe'
import { Container,Col, Row, Form, Button } from 'react-bootstrap';

const Rodape = () => (
    <div id="rodape">

        <Container>
        <Row>
            <Col xs={12} md={12}>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7312.960307846048!2d-46.66240172251435!3d-23.587106906191863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1a91c26a3%3A0x5fd57fbcb6222e5a!2sParque%20Ibirapuera%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1569524080759!5m2!1spt-BR!2sbr" width="100%" height="auto" id="myId" className="myClassname" display="initial" position="relative"/>  
                </Col>
            </Row>
          
            <Row>
                <Col xs={12} md={4}>
                    <h2>Redes sociais</h2>
                    <p>Acompanhe nosso trabalho pelas nossas redes sociais</p>
                    <ul className="icons-redes-sociais">
                        <li><i class="fa fa-facebook-official" aria-hidden="true"></i></li>
                        <li><i class="fa fa-twitter-square" aria-hidden="true"></i></li>
                        <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                        <li><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
                    </ul>
                </Col>
                <Col xs={12} md={4}>
                    <h2>Localização</h2>
                    <p>Centro de Cultura e Eventos Plínio Arlindo de Nes.</p>
                    <p>R. Assis Brasil, 20 D Centro, Chapecó - SC</p>
                    <p>Fone para contato: (19) 3432-2199</p>
                </Col>
                <Col xs={12} md={4}>
                    <h2>Contato</h2>
                    
                    <Form>
                        <Form.Group controlId="nomeContato">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome completo" />
                        </Form.Group>
                        <Form.Group controlId="emailContato">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Seu melhor e-mail" />
                        </Form.Group>
                        <Form.Group controlId="telefoneContato">
                            <Form.Label>Telefone para contato</Form.Label>
                            <Form.Control type="email" placeholder="(00) 0000-0000" />
                        </Form.Group>
                        <Form.Group controlId="mensagemContato" >
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Escrever mensagem ..." />
                        </Form.Group>

                    <Button className="btn btn-padrao" type="submit" block>
                        Enviar mensagem
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
           
    </div>
)

export default Rodape;