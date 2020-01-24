import React from 'react';
import { Container, Row, Col, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class Programacao extends React.Component {
    
    handleClick(dia) {
        const primeiroDia = document.getElementById("prog-primeiro-dia");
        const segundoDia = document.getElementById("prog-segundo-dia");

        if (dia === "primeiro-dia") {
            primeiroDia.classList.remove("prog-dia-inativo");
            segundoDia.classList.add("prog-dia-inativo");
            window.location.href = "#programacao";
        }
        else if (dia === "segundo-dia") {
            segundoDia.classList.remove("prog-dia-inativo");
            primeiroDia.classList.add("prog-dia-inativo");
            window.location.href = "#programacao";
        }
    }

    render() {

        return (
            <div id="programacao" className="cont">
                <Container>
                    <Row>
                        <Col xs={12} className="mb-4">
                            <h1 className="titulo-secao">Programação</h1>
                            <h2 className="info-secao">Confira a programação oficial do ExpoEvent Pro 2020</h2>
                            <h2 className="info-secao">Programação sujeita a mudanças</h2>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Container>
                        <Col md={12} xs={12}>
                            <div className="menu-programacao">
                                <div id="abas-superiores">
                                <Col md={{ size: 6 }} xs={{ size: 12 }} className="primeiro-dia">
                                        <span onClick={() => this.handleClick('primeiro-dia')}>
                                            <h1>Primeiro dia</h1>
                                            <h2>13 de maio de 2020</h2>
                                        </span>
                                    </Col>
                                    <Col md={{ size: 6 }} xs={{ size: 12 }} className="segundo-dia">
                                        <span onClick={() => this.handleClick('segundo-dia')}>
                                            <h1>Segundo dia</h1>
                                            <h2>14 de maio de 2020</h2>
                                        </span>
                                    </Col>
                                </div>
                            </div>

                            <div className="conteudo-programacao" id="prog-primeiro-dia">

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-coffe.png'} className="foto-autor foto-redonda" alt="Wagner Beskow" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">08:00</h2>
                                        <h2 className="titulo-palestra">Inscrições e café da manhã</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-boas-vindas.png'} className="foto-autor foto-redonda" alt="Marcelo Pereira de Carvalho" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">09:30</h2>
                                        <h2 className="titulo-palestra">Boas-vindas</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={ 12 } xs={ 12 } className="pl-0 pr-0">
                                        <h2 className="titulo-palestra palestra-sem-palestrante titulo-painel">Painel 1:  What is Lorem Ipsum</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/palestrantes/Avatar.jpg'} className="foto-autor foto-redonda" alt="Marcelo Pereira de Carvalho" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">09:45</h2>
                                        <h2 className="titulo-palestra">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                                        <h2 className="autor-palestra"><span>João da Silva,</span> Aliança Láctea Sul Brasileira.</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/palestrantes/Avatar.jpg'} className="foto-autor foto-redonda" alt="Luís Eduardo Pacifici Rangel" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">09:50</h2>
                                        <h2 className="titulo-palestra">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                                        <h2 className="autor-palestra"><span>João da Silva,</span> Aliança Láctea Sul Brasileira.</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-debate-perguntas.png'} className="foto-autor foto-redonda" alt="Wagner Beskow" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">11:30</h2>
                                        <h2 className="titulo-palestra">Debate/Perguntas</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-almoco-networking.png'} className="foto-autor foto-redonda" alt="Wagner Beskow" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">12:30</h2>
                                        <h2 className="titulo-palestra">Almoço e networking</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={ 12 } xs={ 12 } className="pl-0 pr-0">
                                        <h2 className="titulo-palestra palestra-sem-palestrante titulo-painel">Painel 2 –	Where does it come from </h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-apresentacao-painel.png'} className="foto-autor foto-redonda" alt="Wagner Beskow" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">14:00</h2>
                                        <h2 className="titulo-palestra">Apresentação do painel</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/palestrantes/Avatar.jpg'} className="foto-autor foto-redonda" alt="David Girão" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">14:10</h2>
                                        <h2 className="titulo-palestra">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                                        <h2 className="autor-palestra"><span>João da Silva,</span> Aliança Láctea Sul Brasileira.</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={ 12 } xs={ 12 } className="pl-0 pr-0">
                                        <h2 className="titulo-palestra palestra-sem-palestrante titulo-painel">Painel 3 – 	Why do we use it</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-apresentacao-painel.png'} className="foto-autor foto-redonda" alt="Encerramento" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">16:30</h2>
                                        <h2 className="titulo-palestra">Apresentação do painel</h2>
                                    </Col>
                                </Row>

                            

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/palestrantes/Avatar.jpg'} className="foto-autor foto-redonda" alt="Fabrício Nascimento" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">17:10</h2>
                                        <h2 className="titulo-palestra">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                                        <h2 className="autor-palestra"><span>João da Silva,</span> Aliança Láctea Sul Brasileira.</h2>
                                    </Col>
                                </Row>

                                <div className="hidden">
                                    <Row className="d-flex align-items-center item-palestra">
                                        <Col md={10}  xs={12} className="pl-0 pr-0">
                                            <h2 className="horario-palestra">17:40</h2>
                                            <h2 className="titulo-palestra">Apresentação Patrocinador Gold</h2>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex align-items-center item-palestra">
                                        <Col md={10}  xs={12} className="pl-0 pr-0">
                                            <h2 className="horario-palestra">17:50</h2>
                                            <h2 className="titulo-palestra">A definir</h2>
                                        </Col>
                                    </Row>
                                </div>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-debate-perguntas.png'} className="foto-autor foto-redonda" alt="Wagner Beskow" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">18:10</h2>
                                        <h2 className="titulo-palestra">Debate</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-encerramento.png'} className="foto-autor foto-redonda" alt="Wagner Beskow" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">18:30</h2>
                                        <h2 className="titulo-palestra">Término do primeiro dia</h2>
                                    </Col>
                                </Row>

                            </div>
                            
                            <div className="conteudo-programacao prog-dia-inativo" id="prog-segundo-dia">

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={ 12 } xs={ 12 } className="pl-0 pr-0">
                                        <h2 className="titulo-palestra palestra-sem-palestrante titulo-painel">Painel 4 – The standard Lorem Ipsum passage, used since the 1500s</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-apresentacao-painel.png'} className="foto-autor foto-redonda" alt="Wagner Beskow" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">08:20</h2>
                                        <h2 className="titulo-palestra">Apresentação do painel</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/palestrantes/Avatar.jpg'} className="foto-autor foto-redonda" alt="Juliano Alarcon" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">08:30</h2>
                                        <h2 className="titulo-palestra">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                                        <h2 className="autor-palestra"><span>João da Silva,</span> Aliança Láctea Sul Brasileira.</h2>
                                    </Col>
                                </Row>
                            
                       

                            

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-debate-perguntas.png'} className="foto-autor foto-redonda" alt="Wagner Beskow" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">09:50</h2>
                                        <h2 className="titulo-palestra">Debate</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-milkbreak-networking.png'} className="foto-autor foto-redonda" alt="Wagner Beskow" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">10:20</h2>
                                        <h2 className="titulo-palestra">Milk break e networking</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-debate-perguntas.png'} className="foto-autor foto-redonda" alt="Debate" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">12:20</h2>
                                        <h2 className="titulo-palestra">Debate</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-almoco-networking.png'} className="foto-autor foto-redonda" alt="Almoço e networking" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">12:40</h2>
                                        <h2 className="titulo-palestra">Almoço e networking</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={ 12 } xs={ 12 } className="pl-0 pr-0">
                                        <h2 className="titulo-palestra palestra-sem-palestrante titulo-painel">Painel 6 – Where can I get some</h2>
                                    </Col>
                                </Row>

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-debate-perguntas.png'} className="foto-autor foto-redonda" alt="Debate" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">15:25</h2>
                                        <h2 className="titulo-palestra">Perguntas</h2>
                                    </Col>
                                </Row>

                                <div className="hidden">
                                    <Row className="d-flex align-items-center item-palestra">
                                        <Col md={ 12 } xs={ 12 } className="pl-0 pr-0">
                                            <h2 className="horario-palestra palestra-sem-palestrante">15:40</h2>
                                            <h2 className="titulo-palestra palestra-sem-palestrante">Apresentação Patrocinador Gold</h2>
                                        </Col>
                                    </Row>
                                </div>
                                
                         

                                <Row className="d-flex align-items-center item-palestra">
                                    <Col md={2} xs={4} className="pl-0 pr-0 ">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/ico-encerramento.png'} className="foto-autor foto-redonda" alt="Encerramento" />
                                    </Col>
                                    <Col md={10}  xs={12} className="pl-0 pr-0">
                                        <h2 className="horario-palestra">16:40</h2>
                                        <h2 className="titulo-palestra">Encerramento</h2>
                                    </Col>
                                </Row>

                            </div>

                            <div className="menu-programacao">
                                <div id="abas-inferiores">
                                    <Col md={{ size: 6 }} xs={{ size: 12 }} className="primeiro-dia">
                                        <span onClick={() => this.handleClick('primeiro-dia')}>
                                            <h1>Primeiro dia</h1>
                                            <h2>13 de maio de 2020</h2>
                                        </span>
                                    </Col>
                                    <Col md={{ size: 6 }} xs={{ size: 12 }} className="segundo-dia">
                                        <span onClick={() => this.handleClick('segundo-dia')}>
                                            <h1>Segundo dia</h1>
                                            <h2>14 de maio de 2020</h2>
                                        </span>
                                    </Col>
                                </div>
                            </div>

                           <div className="text-center mt-4 hidden">
                                <ButtonToolbar>
                                    <OverlayTrigger overlay={ <Tooltip>Baixar programação</Tooltip> }>
                                        <a href="http://www.pdf995.com/samples/pdf.pdf" target="blank" className="btn btn-danger btn-circle btn-circle-xl m-1"><i className="fa fa-file-pdf-o"></i></a>
                                    </OverlayTrigger> 
                                </ButtonToolbar>
                            </div>
                        </Col>
                    </Container>
                </Row>
            </div>
        )
    }
};