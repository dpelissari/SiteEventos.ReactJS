import React from 'react';
import { Container, Row, Col, Card, Modal, ButtonToolbar, OverlayTrigger, Tooltip, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

export default class Palestrantes extends React.Component {
    constructor(props) {
        super(props);
        // armeza o estado  do objeto contendo os palestrantes e os cvs
        this.state = { modal: false, palestrantes: {}, cvPalestrante: {}, infoPalestrante: {}, html: {}, load: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() { this.setState(prevState => ({ modal: !prevState.modal })); }

    // metodo executado assim que o componente é exibido em tela
    componentDidMount() { this.carregarPalestrantes(); }

    carregarPalestrantes = async () => {

        const infoPalestrante = {
            pt: [

                {
                    nome: "João da Silva",
                    descricaoCurta: "Aliança Láctea Sul Brasileira",
                    foto: "avatar.jpg",
                    cv: "JoaoSilva.html"
                },
     
            ]
        }

        // alimenta
        this.setState({ palestrantes: infoPalestrante.pt });
    };

    abriModal(palestrante) {

        // seta um estado para o objeto cvpalestrante de acordo com o palestrante clicado
        this.setState({ cvPalestrante: palestrante, cv: '', load: true });

        axios.get(`./cvs/${palestrante.cv}`)
            .then((res) => {
                this.setState({ cv: res.data , load: false})
            }).catch((err) => {
                console.log(err);
            })

        // chama a funcao responssavel por abrir o modal
        this.toggle();
    }

    render() {

        // armeza o estado do objeto para uso
        const { palestrantes, cvPalestrante, cv, load } = this.state;

        return (
            <div id="palestrantes" className="cont">

                <Row>
                    <Container><Col md={12} xs={12}><h1 className="titulo-secao">Palestrantes</h1></Col></Container>
                </Row>
                <Row>
                    <Container>
                        <Col md={12}>
                            <Row>
                                {Object.keys(palestrantes).map((i) => {
                                    return (
                                        <Col xs={12} md={3} sm={6} className="palestrante-item" key={palestrantes[i].nome}>
                                            <Card onClick={() => this.abriModal(palestrantes[i])}>
                                                <img className="foto-palestrante" width="100%" src={process.env.PUBLIC_URL + '/palestrantes/' + palestrantes[i].foto} alt={palestrantes[i].nome} />
                                                <div className="palestrante-info">
                                                    <p className="nome-palestrante">{palestrantes[i].nome}</p>
                                                    <p className="cargo-palestrante">{palestrantes[i].descricaoCurta}</p>
                                                </div>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Container>
                </Row>

                <Modal show={this.state.modal} onHide={this.toggle} centered size="lg" unmountOnClose={true} className={this.props.className} >
                    <Modal.Header closeButton />
                    <Modal.Body className="text-center">
                        <img className="foto-palestrante-modal" src={process.env.PUBLIC_URL + '/palestrantes/' + cvPalestrante.foto} alt={this.state.cvPalestrante.nome} />
                        <h1 className="nome-palestrante">{this.state.cvPalestrante.nome}</h1>
                        <h2 className="descricao-palestrante">{this.state.cvPalestrante.descricaoCurta}</h2>
                        { load &&
                            <Spinner animation="border" variant="primary" /> 
                        }
                        <div dangerouslySetInnerHTML={{ __html: cv }} className="text-justify" />
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="text-center">
                            <ButtonToolbar>
                                <OverlayTrigger overlay={<Tooltip>Voltar ao site</Tooltip>}>
                                    <Button onClick={this.toggle} className="btn btn-primary btn-circle btn-circle-lg m-1"><i className="fa fa-undo"></i></Button>
                                </OverlayTrigger>
                            </ButtonToolbar>
                        </div>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
};