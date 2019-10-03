import React from 'react';
import { Container, Row, Col, Card, Modal, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class Palestrantes extends React.Component {
    constructor(props) {
        super(props);
        // armeza o estado  do objeto contendo os palestrantes e os cvs
        this.state = { modal: false, palestrantes: {}, cvPalestrante: {}, infoPalestrante: {}, infoSecao: {} };
        this.toggle = this.toggle.bind(this);
    }

    toggle() { this.setState(prevState => ({ modal: !prevState.modal })); }

    // metodo executado assim que o componente é exibido em tela
    componentDidMount() { this.carregarPalestrantes(); }

    carregarPalestrantes = async () => {

        const infoSecao = {
            pt: { lblPalestrante: "Palestrantes" }
        }

        // informacoes dos palestrantes
        const infoPalestrante = {
            pt: [
                { nome: "Palestrante da Silva", descricaoCurta: "DIRETOR DE AGRONEGÓCIO - DIVISÃO AGROINDÚSTRIA NA ENGINEERING DO BRASIL", cv: "Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do de Finibus Bonorum et Malorum (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, Lorem Ipsum dolor sit amet... vem de uma linha na seção 1.10.32.", foto: "avatar.jpg" },
                { nome: "Palestrante de Souza", descricaoCurta: "Gerente de negociação na empresa Lorem", cv: "Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes. Se você pretende usar uma passagem de Lorem Ipsum, precisa ter certeza de que não há algo embaraçoso escrito escondido no meio do texto. Todos os geradores de Lorem Ipsum na internet tendem a repetir pedaços predefinidos conforme necessário, fazendo deste o primeiro gerador de Lorem Ipsum autêntico da internet. Ele usa um dicionário com mais de 200 palavras em Latim combinado com um punhado de modelos de estrutura de frases para gerar um Lorem Ipsum com aparência razoável, livre de repetições, inserções de humor, palavras não características, etc.", foto: "avatar.jpg" },
            ]
        }

        // alimenta
        this.setState({ palestrantes: infoPalestrante.pt, infoSecao: infoSecao.pt });
    };

    abriModal(palestrante) {

        // seta um estado para o objeto cvpalestrante de acordo com o palestrante clicado
        this.setState({ cvPalestrante: palestrante })

        // chama a funcao responssavel por abrir o modal
        this.toggle();
    }

    render() {
        // armeza o estado do objeto para uso
        const { palestrantes, cvPalestrante, infoSecao } = this.state;

        // caminho das fotos dos palestrantes 
        const caminho = "http://interleite.com.br/assets/img/palestrantes/";

        return (
            <div id="palestrantes" className="cont">
                <Row>
                    <Container><Col md={12} xs={12}><h1 className="titulo-secao">{infoSecao.lblPalestrante}</h1></Col></Container>
                </Row>
                <Row>
                    <Container>
                        <Col md={12}>
                            <Row>
                                {Object.keys(palestrantes).map((i) => {
                                    return (
                                        <Col xs={12} md={3} sm={6} className="palestrante-item" key={palestrantes[i].nome}>
                                            <Card onClick={() => this.abriModal(palestrantes[i])}>
                                                <img className="foto-palestrante" width="100%" src={caminho + palestrantes[i].foto} alt={palestrantes[i].nome} />
                                                <div className="palestrante-info">
                                                    <p>{palestrantes[i].nome}</p>
                                                    <p>{palestrantes[i].descricaoCurta}</p>
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
                        <img className="foto-palestrante-modal" src={caminho + cvPalestrante.foto} alt={this.state.cvPalestrante.nome} />
                        <h1 className="nome-palestrante">{this.state.cvPalestrante.nome}</h1>
                        <h2 className="descricao-palestrante">{this.state.cvPalestrante.descricaoCurta}</h2>
                        <p className="curriculo-palestrante">{this.state.cvPalestrante.cv}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="text-center">
                            <ButtonToolbar>
                                <OverlayTrigger overlay={ <Tooltip>Voltar ao site</Tooltip> }>
                                    <a onClick={this.toggle} className="btn btn-primary btn-circle btn-circle-lg m-1"><i className="fa fa-undo"></i></a>
                                </OverlayTrigger> 
                            </ButtonToolbar>
                        </div>        
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
