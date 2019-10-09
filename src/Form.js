import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const schema = Yup.object().shape({
  nome: Yup.string()
    .required("Informe o nome!")
    .min(5, "O nome deve conter mais de 5 letras!")
    .max(100, "O nome deve conter menos de 100 letras!"),
  telefone: Yup.string().required("Informe um telefone para contato"),
  email: Yup.string()
    .required("Informe o email!")
    .email("Informe um email válido!"),
  mensagem: Yup.string().required("o campo mensagem é obrigatório!")
});

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ nome: "", telefone: "", email: "", mensagem: "" }),
  handleSubmit: (values, { resetForm }) => {
    var formData = new FormData();
    formData.append("service_id", "contato_agripoint");
    formData.append("template_id", "template_ff3W3H2K");
    formData.append("user_id", "user_TSLzB8dCPqTfGxWMJXNIF");
    formData.append("template_params", {
      username: "James",
      "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd..."
    });

    formData.append("nome", values.nome);
    formData.append("telefone", values.telefone);
    formData.append("email", values.email);
    formData.append("mensagem", values.mensagem);

    // faz o post na api
    axios({
      method: "post",
      url: "https://api.emailjs.com/api/v1.0/email/send-form",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        console.log(response);
        alert("Form enviado");

        // limpa os campos do formulario
        resetForm(); // não sei se funciona em qualquer versão
      })
      .catch(function(response) {
        console.log(response);
      });
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: "Formulário de contato",
  validationSchema: schema
});

class Formulario extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <div>
          <Field name="nome" placeholder="Nome" className="form-control mb-2" />
          <ErrorMessage name="nome" />
        </div>

        <div>
          <Field
            name="email"
            placeholder="Email"
            className="form-control mb-2"
          />
          <ErrorMessage name="email" />
        </div>

        <div>
          <Field
            name="telefone"
            placeholder="Telefone"
            className="form-control mb-2"
          />
          <ErrorMessage name="telefone" />
        </div>

        <div>
          <Field
            name="mensagem"
            placeholder="Mensagem"
            className="form-control mb-2"
          />
          <ErrorMessage name="mensagem" />
        </div>

        <button type="submit" className="btn btn-padrao btn-block mt-2">
          Enviar
        </button>
      </Form>
    );
  }
}
export default enhanceWithFormik(Formulario);
