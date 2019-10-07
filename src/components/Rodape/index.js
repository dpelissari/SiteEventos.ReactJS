import React from 'react';
import Iframe from 'react-iframe'
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import MaskedInput from 'react-text-mask'

export default class Rodape extends React.Component {

    constructor(props) {
            super(props);
            this.state = {
                fields: { nome: '', telefone: '', email: '', mensagem: '',},
                errors: {}
            }
            
        this.handleChange = this.handleChange.bind(this);
        this.enviaFormContato = this.enviaFormContato.bind(this);
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }

    enviaFormContato(e) {
        e.preventDefault();
        if (this.validaForm()) {
            let fields = {};

            // limpa os campos do formulario
            fields["nome"] = '';
            fields["telefone"] = '';
            fields["email"] = '';
            fields["mensagem"] = '';

            this.setState({ fields: fields });
            alert("Form enviado");
        }
    }

    validaForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["nome"]) {
            formIsValid = false;
            errors["nome"] = "*Por favor informe seu nome";
        }

        if (typeof fields["nome"] !== "undefined") {
            if (!fields["nome"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["nome"] = "*Por favor informe um nome válido.";
            }
        }

        if (!fields["telefone"]) {
            formIsValid = false;
            errors["telefone"] = "*Por favor informe um numero para contato.";
        }

        if (typeof fields["telefone"] !== "undefined") {
            if (!fields["telefone"].match(/^(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/)) {
                formIsValid = false;
                errors["telefone"] = "*Por favor informe um numero de contato válido";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Por favor informe um e-mail.";
        }

        if (typeof fields["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Por favor informe um e-mail válido.";
            }
        }

        if (!fields["mensagem"]) {
            formIsValid = false;
            errors["mensagem"] = "*O campo mensagem é obrigatório";
        }

        if (typeof fields["mensagem"] !== "undefined") {
            if (!fields["mensagem"].match(/^.{30,250}$/)) {
                formIsValid = false;
                errors["mensagem"] = "*Sua mensagem deve conter no mínimo 30 caracteres.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;

    }


    render() {
        return (
            <div id="rodape">
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7312.960307846048!2d-46.66240172251435!3d-23.587106906191863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1a91c26a3%3A0x5fd57fbcb6222e5a!2sParque%20Ibirapuera%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1569524080759!5m2!1spt-BR!2sbr" width="100%" height="auto" display="initial" position="relative" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <h2>Redes sociais</h2>
                            <p>Acompanhe nosso trabalho pelas nossas redes sociais</p>
                            <ul className="icons-redes-sociais">
                                <li><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
                                <li><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
                                <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                <li><i className="fa fa-linkedin-square" aria-hidden="true"></i></li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4} className="mb-4">
                            <h2>Localização</h2>
                            <p>Centro de Cultura e Eventos Plínio Arlindo de Nes.</p>
                            <p>R. Assis Brasil, 20 D Centro, Chapecó - SC</p>
                            <p>Fone para contato: (19) 3432-2199</p>
                        </Col>
                        <Col xs={12} md={4} id="form-contato">
                            <h2>Contato</h2>

                            <Form className="form" method="post" onSubmit={this.enviaFormContato}>
                                <Form.Group controlId="nomeContato">
                                    <Form.Label>Nome</Form.Label>
                                    <input className="form-control" type="text" name="nome" maxLength="150" id="nomeContato" placeholder="Nome" value={this.state.fields.nome} onChange={this.handleChange}/>
                                    <div className="erro-form f-rubik">{this.state.errors.nome}</div>
                                </Form.Group>

                                <Form.Group controlId="emailContato">
                                    <Form.Label>E-mail</Form.Label>
                                    <input className="form-control" type="text" name="email" maxLength="150" id="emailContato" placeholder="Endereço de e-mail" value={this.state.fields.email} onChange={this.handleChange}/>
                                    <div className="erro-form f-rubik">{this.state.errors.email}</div>
                                </Form.Group>

                                <Form.Group controlId="telefoneContato">
                                    <Form.Label>Telefone para contato</Form.Label>
                                    <MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} className="form-control" name="telefone" id="foneContato" placeholder="Telefone para contato" value={this.state.fields.telefone} onChange={this.handleChange}/>
                                    <div className="erro-form f-rubik">{this.state.errors.telefone}</div>
                                </Form.Group>

                                <Form.Group controlId="mensagemContato" >
                                    <Form.Label>Mensagem</Form.Label>
                                    <input className="form-control" type="textarea" name="mensagem" id="mensagemContato" placeholder="Sua mensagem" maxLength="1000" rows='6' value={this.state.fields.mensagem} onChange={this.handleChange}/>
                                    <div className="erro-form f-rubik">{this.state.errors.mensagem}</div>                                </Form.Group>

                                <Button className="btn btn-padrao" type="submit" block name="btnEnviar" value="Register">
                                    Enviar mensagem
                                </Button>

                                <input type="text" name="validador" id="validador" value="@pessoa"></input>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }

}