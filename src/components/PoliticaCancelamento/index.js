import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const PoliticaCancelamento = () => (
    <div id="politica-cancelamento" className="cont">
        <Container>
            <Row>
                <Col xs={12} className="mb-4">
                    <h1 className="titulo-secao mt-4 mb-4">Política de Cancelamento</h1>
                    <p>
                        De acordo com o <strong>Código de Defesa do Consumidor</strong>, o participante poderá solicitar reembolso da inscrição caso
                        a desistência ocorra em até 7 dias corridos após a compra. Essa solicitação deve ser feita através do email
                        <strong> <a href="mailto:eventos@agripoint.com.br?subject=Solicitação de cancelamento Interleite Sul">eventos@email.com.br</a>.</strong>
                    </p>
                    <p>
                        Caso o participante não compareça ao evento sem se manifestar previamente, não haverá ressarcimento da inscrição
                        uma vez que todos os gastos para a presença deste participante no evento já foram contratados.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
); export default PoliticaCancelamento;