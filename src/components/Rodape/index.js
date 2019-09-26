import React from 'react';
import { Container,Col, Row, Form, Button } from 'react-bootstrap';

const Rodape = () => (
    <div className="rodape">
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <h2>Redes sociais</h2>
                    <p>Acompanhe nosso trabalho pelas nossas redes sociais</p>
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