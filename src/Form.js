import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

class Formulario extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    nome: '',
                    email: '',
                    fone: '',
                    mensagem: '',
                }}
                validationSchema={Yup.object().shape({
                    nome: Yup.string()
                        .required('*O campo nome é obrigatório'),
                 
                    email: Yup.string()
                        .email('*Ops: E-mail inválido')
                        .required('*O campo e-mail é obrigatório'),
                    fone: Yup.string()
                        .required('*O campo telefone é obrigatório'),
                        mensagem:  Yup.string()
                        .required('*O campo mensagem é obrigatório')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                    
                  const formData = {
                      service_id: 'contato_agripoint',
                      template_id: 'template_ff3W3H2K',
                      user_id: 'user_TSLzB8dCPqTfGxWMJXNIF',
                  };

                  axios({
                    method: 'post',
                    url: 'https://api.emailjs.com/api/v1.0/email/send',
                    data: formData
                })

                .then(function (response) {
                  console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
                });

                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="nome">First Name</label>
                            <Field name="nome" type="text" className={'form-control' + (errors.nome && touched.nome ? ' is-invalid' : '')} />
                            <ErrorMessage name="nome" component="div" className="invalid-feedback" />
                        </div>
                  
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fone">Telefone</label>
                            <Field name="fone" type="text" className={'form-control' + (errors.fone && touched.fone ? ' is-invalid' : '')} />
                            <ErrorMessage name="fone" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem</label>
                            <Field name="mensagem" type="text" className={'form-control' + (errors.mensagem && touched.mensagem ? ' is-invalid' : '')} />
                            <ErrorMessage name="mensagem" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-padrao btn-block mr-2">Enviar</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default Formulario ; 