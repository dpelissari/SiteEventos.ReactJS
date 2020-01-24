import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default class Patrocinadores extends React.Component {

    // armeza o estado do objeto patrocinador
    state = { patrocinadoresOuro: {}, patrocinadoresPrata: {},  patrocinadoresBronze: {}, patrocinadoresApoio: {}  }

    // metodo executado assim que o componente é exibido em tela
    componentDidMount() { this.carregarPatrocinador();}

    carregarPatrocinador = async () => {

        const infoPatrocinadores = {
            ouro: [
                { nome: "React", linkSite: "https://reactjs.org/", logo: "react.png"},
                { nome: "React", linkSite: "https://reactjs.org/", logo: "react.png"},
            ],
            prata: [
                { nome: "React", linkSite: "https://reactjs.org/", logo: "react.png"},
                { nome: "React", linkSite: "https://reactjs.org/", logo: "react.png"},           
             ],
            bronze: [
                { nome: "React", linkSite: "https://reactjs.org/", logo: "react.png"},
                { nome: "React", linkSite: "https://reactjs.org/", logo: "react.png"},
                { nome: "React", linkSite: "https://reactjs.org/", logo: "react.png"},
                { nome: "React", linkSite: "https://reactjs.org/", logo: "react.png"},

            ],
            apoio: [
                { nome: "React", linkSite: "https://reactjs.org/", logo: "react.png"},
            ]
        }

        this.setState({ patrocinadoresOuro: infoPatrocinadores.ouro, patrocinadoresPrata: infoPatrocinadores.prata,  patrocinadoresBronze: infoPatrocinadores.bronze, patrocinadoresApoio: infoPatrocinadores.apoio});
    };

    render() {

        // armeza o estado do objeto para uso
        const { patrocinadoresOuro, patrocinadoresPrata, patrocinadoresBronze, patrocinadoresApoio } = this.state;

        return (
                <div id="patrocinadores" className="cont">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <h1 className="titulo-secao">Parceiros</h1>
                                <h2 className="subtitulo-secao">Conheça os parceiros que farão deste, um evento inesquecível!</h2>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center mb-4">
                            <Col md={12} ><h1 className="cota">Ouro</h1></Col>
                                { Object.keys(patrocinadoresOuro).map((i) => {
                                    return (
                                        <Col md={3} xs={12} key={i}>
                                            <a href={patrocinadoresOuro[i].linkSite} key={patrocinadoresOuro[i].nome} target="blank" className="d-flex justify-content-center"><img src={process.env.PUBLIC_URL + '/patrocinadores/ouro/' + patrocinadoresOuro[i].logo} alt={patrocinadoresOuro[i].nome} className="patrocinadores-ouro" /></a>
                                        </Col>
                                    )
                                })} 
                               
                        </Row>
                       
                        <Row className="d-flex justify-content-center mb-4">
                            <Col md={12} ><h1 className="cota">Prata</h1></Col>
                                { Object.keys(patrocinadoresPrata).map((i) => {
                                    return (
                                        <Col md={3} xs={12} key={i}>
                                            <a href={patrocinadoresPrata[i].linkSite} key={patrocinadoresPrata[i].nome} target="blank" className="d-flex justify-content-center"><img src={process.env.PUBLIC_URL + '/patrocinadores/prata/' + patrocinadoresPrata[i].logo} alt={patrocinadoresPrata[i].nome} className="patrocinadores-prata" /></a>
                                        </Col>
                                    )
                                })} 
                        </Row>
                        
                        <Row className="d-flex justify-content-center">
                            <Col md={12} ><h1 className="cota">Bronze</h1></Col>
                            { Object.keys(patrocinadoresBronze).map((i) => {
                                return (
                                    <Col md={3} xs={12} key={i}>
                                        <a href={patrocinadoresBronze[i].linkSite} key={patrocinadoresBronze[i].nome} target="blank" className="d-flex justify-content-center"><img src={process.env.PUBLIC_URL + '/patrocinadores/bronze/' +  patrocinadoresBronze[i].logo} alt={patrocinadoresBronze[i].nome} className="patrocinadores-bronze" /></a>
                                    </Col>
                                )
                            })} 
                        </Row>

                        <Row className="d-flex justify-content-center">
                            <Col md={12} ><h1 className="cota">Apoio</h1></Col>
                            { Object.keys(patrocinadoresApoio).map((i) => {
                                return (
                                    <Col md={3} xs={12} key={i}>
                                        <a href={patrocinadoresApoio[i].linkSite} key={patrocinadoresApoio[i].nome} target="blank" className="d-flex justify-content-center"><img src={process.env.PUBLIC_URL + '/patrocinadores/apoio/' +  patrocinadoresApoio[i].logo} alt={patrocinadoresApoio[i].nome} className="patrocinadores-apoio" /></a>
                                    </Col>
                                )
                            })} 
                        </Row>

                        <Row className="d-flex justify-content-center">
                            <Col md={3} xs={8}>
                                <a href="mailto:eventos@email.com.br?subject=Quero patrocinar o ExpoEvent 2020"className="btn btn-padrao btn-patrocinio btn-block">Seja um patrocinador</a>
                            </Col>
                        </Row>   
                    </Container>
                </div>
        )
    }
};