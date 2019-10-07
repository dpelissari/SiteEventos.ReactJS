import React from 'react';
import {Row, Col, Container, Card, Button,} from 'react-bootstrap';


export default class Inscricoes extends React.Component{
    render(){
        return(
            <div id="inscricoes" className="cont">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <h1 className="titulo-secao">Adquira aqui seu ingresso!</h1>
                                <h2 className="info-secao">Clique em uma das categorias e escolha seu ingresso.</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} sm={12} lg={4}>
                                <Card>
                                    <Container>
                                        <div className="info-lote">
                                            <p className="lote">1º Lote</p>
                                            <p className="vencimento-lote">Desconto de <strong>0%</strong> até 25/06/1996</p>
                                            <p className="evento">Expo Event</p>
                                        </div>
                                        <div>
                                            <div className="tipo-ingresso">
                                                <a href="http://twixar.me/flx1" className="btn btn-tipo-ingresso btn-amarelo" id="btnEstudante"  target="blank">ESTUDANTE</a>
                                                <a href="http://twixar.me/flx1" className="btn btn-tipo-ingresso btn-amarelo" id="btnEstudante"  target="blank">PROFISSIONAL</a>
                                            </div>
                                            <div className="valor-ingresso">
                                                <p><span className="rs">R$</span>250,35</p>
                                                <p><span className="rs">R$</span>350,99</p>
                                            </div>
                                        </div>
                                    </ Container>
                                </Card>
                            </Col>
                            <Col xs={12} md={6} sm={12} lg={4}>
                                <Card>
                                    <Container>
                                        <div className="info-lote">
                                            <p className="lote">2º Lote</p>
                                            <p className="vencimento-lote">Desconto de <strong>0%</strong> até 25/06/1996</p>
                                            <p className="evento">Expo Event</p>
                                        </div>
                                        <div>
                                            <div className="tipo-ingresso">
                                                <a href="http://twixar.me/flx1" className="btn btn-tipo-ingresso" target="blank">ESTUDANTE</a>
                                                <a href="http://twixar.me/flx1" className="btn btn-tipo-ingresso" target="blank">PROFISSIONAL</a>
                                            </div>
                                            <div className="valor-ingresso">
                                                <p><span className="rs">R$</span>250,35</p>
                                                <p><span className="rs">R$</span>350,99</p>
                                            </div>
                                        </div>
                                    </ Container>
                                </Card>
                            </Col>

                            <Col xs={12} md={6} sm={12} lg={4}>
                                <Card>
                                    <Container>
                                        <div className="info-lote">
                                            <p className="lote">3º Lote</p>
                                            <p className="vencimento-lote">Desconto de <strong>0%</strong> até 25/06/1996</p>
                                            <p className="evento">Expo Event</p>
                                        </div>
                                        <div>
                                            <div className="tipo-ingresso">
                                                <a href="http://twixar.me/flx1" className="btn btn-tipo-ingresso" target="blank">ESTUDANTE</a>
                                                <a href="http://twixar.me/flx1" className="btn btn-tipo-ingresso" target="blank">PROFISSIONAL</a>
                                            </div>
                                            <div className="valor-ingresso">
                                                <p><span className="rs">R$</span>250,35</p>
                                                <p><span className="rs">R$</span>350,99</p>
                                            </div>
                                        </div>
                                    </ Container>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
            </div>
        )
    }
}