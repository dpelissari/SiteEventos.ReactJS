import React from 'react';
import { Container, Row, Col, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class Programacao extends React.Component {

    // armeza o estado do objeto patrocinador
    state = { programacao: {}, infoProgramacao: {} };

    // metodo executado assim que o componente é exibido em tela
    componentDidMount() { this.carregarProgramacao();}

    carregarProgramacao = async () => {

        const infoProgramacao = {
            pt: {
                lblProgramacao: "Programação",
                lblDescProgramacao: "Confira a programação oficial do Expo Event 2020",
                lblInfoProgramacao: "Programação sujeita a mudanças",
                lblPrimeiroDia: "Primeiro dia",
                lblDataPrimeiroDia: "27 de novembro de 2019",
                lblSegundoDia: "Segundo dia",
                lblDataSegundoDia: "28 de novembro de 2019",
            }
        }

        const programacao = {
            pt: [
                { titulo: "Abertura", palestrantes: null, descricaoCurta: null, horaInicio: "07:00", dataInicio: "27", ehPainel: true },
                { titulo: "Primeira palestra", palestrantes: null, descricaoCurta: null, horaInicio: "07:00", dataInicio: "27", ehPainel: false },
                { titulo: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão", palestrantes: ["Lorem Ipsum"], descricaoCurta: "Gerente de negociação na empresa Lorem", horaInicio: "08:00", dataInicio: "27", ehPainel: false, foto: "avatar.jpg" },
                { titulo: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão", palestrantes: ["Lorem Ipsum"], descricaoCurta: "Gerente de negociação na empresa Lorem", horaInicio: "08:30", dataInicio: "28", ehPainel: false, foto: "avatar.jpg" }
            ]
        }

        this.setState({ infoProgramacao: infoProgramacao.pt, programacao: programacao.pt });
    };

    handleClick(dia) {
        const primeiroDia = document.getElementById("prog-primeiro-dia");
        const segundoDia = document.getElementById("prog-segundo-dia");

        if (dia === "primeiro-dia") {
            primeiroDia.classList.remove("prog-dia-inativo");
            segundoDia.classList.add("prog-dia-inativo");
        }
        else if (dia === "segundo-dia") {
            segundoDia.classList.remove("prog-dia-inativo");
            primeiroDia.classList.add("prog-dia-inativo");
        }
    }

    render() {

        // armeza o estado do objeto para uso
        const { infoProgramacao, programacao } = this.state;
        
        // caminho das fotos dos palestrantes 
        const caminho = "http://interleite.com.br/assets/img/palestrantes/";

        return (

            <div id="programacao" className="cont">
                <Container>
                    <Row>
                        <Col xs={{ size: 12 }}>
                            <h1 className="titulo-secao">Programação</h1>
                            <h2 className="info-secao">{infoProgramacao.lblDescProgramacao}</h2>
                            <h2 className="info-secao">{infoProgramacao.lblInfoProgramacao}</h2>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Container>
                        <Col md={{ size: 12 }} xs={{ size: 12 }}>
                            <div className="menu-programacao">
                                <div id="abas-superiores">
                                    <Col md={{ size: 6 }} xs={{ size: 12 }} className="primeiro-dia">
                                        <span onClick={() => this.handleClick('primeiro-dia')}>
                                            <h1>{infoProgramacao.lblPrimeiroDia}</h1>
                                            <h2>{infoProgramacao.lblDataPrimeiroDia}</h2>
                                        </span>
                                    </Col>
                                    <Col md={{ size: 6 }} xs={{ size: 12 }} className="segundo-dia">
                                        <span onClick={() => this.handleClick('segundo-dia')}>
                                            <h1>{infoProgramacao.lblSegundoDia}</h1>
                                            <h2>{infoProgramacao.lblDataSegundoDia}</h2>
                                        </span>
                                    </Col>
                                </div>
                            </div>

                            <div className="conteudo-programacao" id="prog-primeiro-dia">
                                {Object.keys(programacao).map(i => {
                                    if (programacao[i].dataInicio === "27") {

                                        // verifica se não tem palestrante e se é um painel
                                        if (programacao[i].palestrantes === null && programacao[i].ehPainel === true) {

                                            return (
                                                <Row className="d-flex align-items-center item-palestra" key={i}>
                                                    <Col md={ 12 } xs={ 12 } className="pl-0 pr-0">
                                                        <h2 className="horario-palestra palestra-sem-palestrante titulo-painel">{programacao[i].titulo}</h2>
                                                    </Col>
                                                </Row>
                                            )
                                        }

                                        // verifica se não tem palestrante e se não é um painel
                                        else if (programacao[i].palestrantes === null && programacao[i].ehPainel === false) {
                                            return (
                                                <Row className="d-flex align-items-center item-palestra" key={i}>
                                                    <Col md={10} xs={12} className="pl-0 pr-0">
                                                        <h2 className="horario-palestra palestra-sem-palestrante">{programacao[i].horaInicio}</h2>
                                                        <h2 className="titulo-palestra palestra-sem-palestrante">{programacao[i].titulo}</h2>
                                                    </Col>
                                                </Row>
                                            )
                                        }

                                        // se tiver palestrante e não for um painel
                                        else {
                                            return (
                                                <Row className="d-flex align-items-center item-palestra" key={i}>
                                                    {programacao[i].palestrantes.map(p =>
                                                        <Row className="d-flex align-items-center item-palestra" key={i}>
                                                            <Col md={2} xs={4} className="pl-0 pr-0 ">
                                                                <img src={caminho + programacao[i].foto} className="foto-autor foto-redonda" alt={programacao[i].palestrantes} />
                                                            </Col>
                                                            <Col md={10}  xs={12} className="pl-0 pr-0">
                                                                <h2 className="horario-palestra">{programacao[i].horaInicio}</h2>
                                                                <h2 className="titulo-palestra">{programacao[i].titulo}</h2>
                                                                <h2 className="autor-palestra"><span>{programacao[i].palestrantes},</span> {programacao[i].descricaoCurta}.</h2>
                                                            </Col>
                                                        </Row>
                                                    )}
                                                </Row>
                                            )
                                        }
                                    } else return false;
                                })}
                            </div>

                            <div className="conteudo-programacao prog-dia-inativo" id="prog-segundo-dia">
                                {Object.keys(programacao).map(i => {
                                    if (programacao[i].dataInicio === "28") {

                                        // verifica se não tem palestrante e se é um painel
                                        if (programacao[i].palestrantes.length === 0 && programacao[i].ehPainel === true) {

                                            return (
                                                <Row className="d-flex align-items-center item-palestra" key={i}>
                                                    <Col md={12} xs={12} className="pl-0 pr-0">
                                                        <h2 className="horario-palestra palestra-sem-palestrante titulo-painel">{programacao[i].titulo}</h2>
                                                    </Col>
                                                </Row>
                                            )
                                        }

                                        // verifica se não tem palestrante e se não é um painel
                                        else if (programacao[i].palestrantes.length === 0 && programacao[i].ehPainel === false) {
                                            return (
                                                <Row className="d-flex align-items-center item-palestra" key={i}>
                                                    <Col md={10} xs={12} className="pl-0 pr-0">
                                                        <h2 className="horario-palestra palestra-sem-palestrante">{programacao[i].horaInicio}</h2>
                                                        <h2 className="titulo-palestra palestra-sem-palestrante">{programacao[i].titulo}</h2>
                                                    </Col>
                                                </Row>
                                            )
                                        }

                                        // se tiver palestrante e não for um painel
                                        else {
                                            return (
                                                <Row className="d-flex align-items-center item-palestra" key={i}>
                                                    {programacao[i].palestrantes.map(p =>
                                                        <Row className="d-flex align-items-center item-palestra" key={i}>
                                                            <Col md={2} xs={4} className="pl-0 pr-0 ">
                                                                <img src={caminho + programacao[i].foto} className="foto-autor foto-redonda" alt={programacao[i].palestrantes} />
                                                            </Col>
                                                            <Col md={10} xs={12} className="pl-0 pr-0">
                                                                <h2 className="horario-palestra">{programacao[i].horaInicio}</h2>
                                                                <h2 className="titulo-palestra">{programacao[i].titulo}</h2>
                                                                <h2 className="autor-palestra"><span>{programacao[i].palestrantes},</span> {programacao[i].descricaoCurta}.</h2>
                                                            </Col>
                                                        </Row>
                                                    )}
                                                </Row>
                                            )
                                        }
                                    } else return false;
                                })}
                            </div>

                           <div className="text-center">

                          
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
}