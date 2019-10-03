import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default class Patrocinadores extends React.Component {

    // armeza o estado do objeto patrocinador
    state = { patrocinadoresOuro: {}, patrocinadoresPrata: {},  patrocinadoresBronze: {}  }

    // metodo executado assim que o componente é exibido em tela
    componentDidMount() { this.carregarPatrocinador();}

    carregarPatrocinador = async () => {

        const infoPatrocinadores = {
            ouro: [
                { nome: "Phibro", linkSite: "https://www.phibro.com.br", logo: "phibro.png",},
                { nome: "Phibro", linkSite: "https://www.phibro.com.br", logo: "phibro.png", },    
                { nome: "Class", linkSite: "https://www.phibro.com.br", logo: "phibro.png", },
            ],
            prata: [
                { nome: "Phibro", linkSite: "https://www.phibro.com.br", logo: "phibro.png",},
                { nome: "Class", linkSite: "https://www.phibro.com.br", logo: "phibro.png", },
            ],
            bronze: [
                { nome: "Phibro", linkSite: "https://www.phibro.com.br", logo: "phibro.png",},
            ]
        }

        this.setState({ patrocinadoresOuro: infoPatrocinadores.ouro, patrocinadoresPrata: infoPatrocinadores.prata,  patrocinadoresBronze: infoPatrocinadores.bronze});
    };

    render() {

        // armeza o estado do objeto para uso
        const { patrocinadoresOuro, patrocinadoresPrata, patrocinadoresBronze } = this.state;

        // url de caminho das imagens
        const caminho = "http://interleite.com.br/assets/img/patrocinadores/ouro/";

        return (
                <div id="patrocinadores" className="cont">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <h1 className="titulo-secao">Patrocinadores</h1>
                                <h2 className="subtitulo-secao">Conheça os parceiros que farão deste, um evento inesquecível!</h2>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center" >
                            <Col md={12} ><h1 className="cota">Ouro</h1></Col>

                            { Object.keys(patrocinadoresOuro).map((i) => {
                                return (
                                    
                                    <Col md={4} key={i}>
                                        <div className="logo-patrocinio">
                                            <a href={patrocinadoresOuro[i].linkSite} key={patrocinadoresOuro[i].nome} target="blank"><img src={caminho + patrocinadoresOuro[i].logo} alt={patrocinadoresOuro[i].nome} /></a>
                                        </div>
                                    </Col>
                                )
                            })} 
                            
                        </Row>

                        <Row className="d-flex justify-content-center" >
                            <Col md={12} ><h1 className="cota">Prata</h1></Col>

                            { Object.keys(patrocinadoresPrata).map((i) => {
                                return (
                                    <Col md={4} key={i}>
                                         <div className="logo-patrocinio">
                                            <a href={patrocinadoresPrata[i].linkSite} key={patrocinadoresPrata[i].nome} target="blank"><img src={caminho + patrocinadoresPrata[i].logo} alt={patrocinadoresPrata[i].nome} /></a>
                                         </div>
                                    </Col>
                                )
                            })} 

                        </Row>

                        <Row className="d-flex justify-content-center" >
                            <Col md={12} ><h1 className="cota">Bronze</h1></Col>

                            { Object.keys(patrocinadoresBronze).map((i) => {
                                return (
                                    <Col md={4} key={i}>
                                           <div className="logo-patrocinio">
                                                <a href={patrocinadoresBronze[i].linkSite} key={patrocinadoresBronze[i].nome} target="blank"><img src={caminho + patrocinadoresBronze[i].logo} alt={patrocinadoresBronze[i].nome} /></a>

                                           </div>
                                    </Col>
                                )
                            })} 

                        </Row>

                    </Container>
                </div>
        )
    }
}