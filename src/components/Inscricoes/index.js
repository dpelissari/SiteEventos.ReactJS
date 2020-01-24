import React from 'react';
import { Row, Col, Container, Card, Form } from 'react-bootstrap';

export default class Inscricoes extends React.Component {

    handleChange() {
        
        var primeiroLote = document.getElementById("selecaoPrimeiroLote").value;
        var segundoLote = document.getElementById("selecaoSegundoLote").value;
        var terceiroLote = document.getElementById("selecaoTerceiroLote").value;
        
        var valorPrimeiroLote = document.getElementById("valorPrimeiroLote");
        var valorSegundoLote = document.getElementById("valorSegundoLote");
        var valorTerceiroLote = document.getElementById("valorTerceiroLote");

        switch (primeiroLote) {
            case "isul-est": valorPrimeiroLote.textContent = "162,50";
            break;
            case "isul-prof": valorPrimeiroLote.textContent = "263,50";
            break;
            case "isul-est-almoco": valorPrimeiroLote.textContent = "239,50";
            break;
            case "isul-prof-almoco": valorPrimeiroLote.textContent = "340,50";
            break;
            default: alert('A seleção do ingresso é obrigatória!');
        }

        switch (segundoLote) {
            case "isul-est":valorSegundoLote.textContent = "200,00";
            break;
            case "isul-prof": valorSegundoLote.textContent = "312,00";
            break;
            case "isul-est-almoco": valorSegundoLote.textContent = "277,00";
            break;
            case "isul-prof-almoco": valorSegundoLote.textContent = "389,00";
            break;
            default: alert('A seleção do ingresso é obrigatória!');
        }

        switch (terceiroLote) {
            case "isul-est":valorTerceiroLote.textContent = "250,00";
            break;
            case "isul-prof": valorTerceiroLote.textContent = "390,00";
            break;
            case "isul-est-almoco": valorTerceiroLote.textContent = "327,00";
            break;
            case "isul-prof-almoco": valorTerceiroLote.textContent = "467,00";
            break;
            default: alert('A seleção do ingresso é obrigatória!');
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        var loteAtual = document.getElementById("selecaoPrimeiroLote").value;
        switch (loteAtual) {
            case "isul-est": window.open('https://www.globo.com/', '_blank');
            break;

            case "isul-prof": window.open('https://www.globo.com/', '_blank');
            break;

            case "isul-est-almoco":window.open('https://www.globo.com/', '_blank');
            break;

            case "isul-prof-almoco": window.open('https://www.globo.com/', '_blank');
            break;  

            default: alert('A seleção do ingresso é obrigatória!');
        }
    }

    render() {
        return (
            <div id="inscricoes" className="cont">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1 className="titulo-secao">Adquira seu ingresso</h1>
                            <h2 className="info-secao">Selecione abaixo o tipo de ingresso ideal para você!</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} sm={12} lg={4}>
                            <Card className="animated bounce slow">
                                <Container>
                                    <div className="info-lote">
                                        <p className="lote">1º Lote</p>
                                        <p className="vencimento-lote">Desconto de <strong>35%</strong> até 05/02/2020</p>
                                    </div>
                                    <Form>
                                        <Form.Group as={Col} className="p-0"  >
                                            <Form.Control as="select" id="selecaoPrimeiroLote" onChange={this.handleChange}>
                                                <option value="isul-prof">ExpoEvent Profissional</option>
                                                <option value="isul-prof-almoco">ExpoEvent Profissional + Almoço</option>
                                                <option value="isul-est">ExpoEvent Estudante</option>
                                                <option value="isul-est-almoco">ExpoEvent Estudante + Almoço</option>                                             </Form.Control>
                                        </Form.Group>
                                        <div className="info-ingresso" id="infoPrimeiroLote">
                                            <p className="itens-inclusos">Os ingressos garantem a participação nos dois dias do evento e certificado dígital.</p>
                                            <p className="itens-inclusos">O almoço é equivalente aos dois dias de evento, caso selecionado opção de ingresso com almoço, o valor do ingresso terá um acréscimo de R$77,00.</p>
                                        </div>
                                        <div className="valor-ingresso">
                                            <p className="rs">R$<span id="valorPrimeiroLote">263,50</span></p>
                                        </div>
                                        <button className="btn btn-tipo-ingresso" onClick={this.handleSubmit}> COMPRAR</button>
                                    </Form>
                                </ Container>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} sm={12} lg={4}>
                            <Card>
                                <Container>
                                    <div className="info-lote">
                                        <p className="lote">2º Lote</p>
                                        <p className="vencimento-lote">Desconto de <strong>20%</strong> até 20/04/2020</p>
                                    </div>
                                    <Form>
                                        <Form.Group as={Col} className="p-0" >
                                            <Form.Control as="select" id="selecaoSegundoLote" onChange={this.handleChange}>
                                                <option value="isul-prof">ExpoEvent Profissional</option>
                                                <option value="isul-prof-almoco">ExpoEvent Profissional + Almoço</option>
                                                <option value="isul-est">ExpoEvent Estudante</option>
                                                <option value="isul-est-almoco">ExpoEvent Estudante + Almoço</option>                                            
                                            </Form.Control>
                                        </Form.Group>
                                        <div className="info-ingresso">
                                           
                                            <p className="itens-inclusos">Os ingressos garantem a participação nos dois dias do evento e certificado dígital.</p>
                                            <p className="itens-inclusos">O almoço é equivalente aos dois dias de evento, caso selecionado opção de ingresso com almoço, o valor do ingresso terá um acréscimo de R$77,00.</p>
                                        </div>
                                        <div className="valor-ingresso">
                                            <p className="rs">R$<span id="valorSegundoLote">312,00</span></p>
                                        </div>
                                        <span className="btn btn-tipo-ingresso btn-inativo disabled">COMPRAR</span>                                    </Form>
                                </ Container>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} sm={12} lg={4}>
                            <Card>
                                <Container>
                                    <div className="info-lote">
                                        <p className="lote">3º Lote</p>
                                        <p className="vencimento-lote">Valor final</p>
                                    </div>
                                    <Form>
                                        <Form.Group as={Col} className="p-0" >
                                            <Form.Control as="select" id="selecaoTerceiroLote" onChange={this.handleChange}>
                                                <option value="isul-prof">ExpoEvent Profissional</option>
                                                <option value="isul-prof-almoco">ExpoEvent Profissional + Almoço</option>
                                                <option value="isul-est">ExpoEvent Estudante</option>
                                                <option value="isul-est-almoco">ExpoEvent Estudante + Almoço</option>   
                                            </Form.Control>
                                        </Form.Group>
                                        <div className="info-ingresso">
                                            <p className="itens-inclusos">Os ingressos garantem a participação nos dois dias do evento e certificado dígital.</p>
                                            <p className="itens-inclusos">O almoço é equivalente aos dois dias de evento, caso selecionado opção de ingresso com almoço, o valor do ingresso terá um acréscimo de R$77,00.</p>
                                        </div>
                                        <div className="valor-ingresso">
                                            <p className="rs">R$<span id="valorTerceiroLote">390,00</span></p>
                                        </div>
                                        <span className="btn btn-tipo-ingresso btn-inativo disabled">COMPRAR</span>                                    </Form>
                                </ Container>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};