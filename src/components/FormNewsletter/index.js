import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { withFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import axios from "axios";
import novidades from '../../assets/img/novidades.png';

const schema = Yup.object().shape({
    email: Yup.string()
        .required("* Este campo é obrigatório")
        .email("Ops: Informe um e-mail válido"),
});

const enhanceWithFormik = withFormik({
    mapPropsToValues: () => ({ nome: "", telefone: "", email: "", mensagem: "" }),
    handleSubmit: (values, { resetForm }) => {
        var formData = new FormData();
        // configurar envio de e-mailjs https://www.emailjs.com/
        formData.append("service_id", "seu_service_id");
        formData.append("template_id", "seu_template_id"); 
        formData.append("user_id", "seu_user_id");
        formData.append("email", values.email);

        axios({
            method: "post",
            url: "https://api.emailjs.com/api/v1.0/email/send-form",
            data: formData,
            config: { headers: { "Content-Type": "multipart/form-data" } }
        })
            .then(function (response) {
                Swal.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Sua mensagem foi enviada!',
                    showConfirmButton: false,
                    timer: 1500
                })
                resetForm();
            })
            .catch(function (response) {
                console.log(response);
            });
    },
    isInitialValid: false,
    validateOnChange: true,
    validateOnBlur: true,
    displayName: "Formulário Newsletter ExpoEvent",
    validationSchema: schema
});

class FormularioNewsletter extends React.Component {
    render() {
        const { values, handleChange, handleBlur, handleSubmit, errors } = this.props;
        return (
            <div id="form-newsletter">
                    <Container>
                        <Row>
                            <Col lg={12} xs={12}>
                                <div className="text-center">
                                    <img src={novidades} alt="Novidades Interleite Sul" className="img-fluid"></img>
                                    <h2>Cadastre seu e-mail para receber todas as informações sobre o evento que discutirá o futuro da tecnologia no Brasil!</h2>
                                </div>     
                            </Col>
                        </Row>
                        <form onSubmit={handleSubmit} id="form-novidades" >
                            <Row className="d-flex justify-content-center">
                                <Col md={8} xs={12}>
                                    <input placeholder="E-mail" className="form-control mt-1 mb-1" onChange={handleChange} onBlur={handleBlur} value={values.email} name="email" />
                                    <span className="erro-validacao">{errors.email}</span>
                                </Col>
                                <Col md={3} xs={12}>
                                    <button type="submit" className="btn btn-padrao btn-block mt-1 mb-1">Cadastrar</button>
                                </Col>
                            </Row>  
                        </form>
                    </Container>
            </div>     
        );
    }
}; export default enhanceWithFormik(FormularioNewsletter);