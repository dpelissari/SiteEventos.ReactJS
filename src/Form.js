import React from "react";
import { withFormik } from "formik";
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
    formData.append("template_id", "template_FP3Iyqpu");
    formData.append("user_id", "user_cCk8IRoIdm9aX8Gg8We9O");
    formData.append("nome", values.nome);
    formData.append("telefone", values.telefone);
    formData.append("email", values.email);
    formData.append("mensagem", values.mensagem);
    
    axios({
      method: "post",
      url: "https://api.emailjs.com/api/v1.0/email/send-form",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        console.log(response.data);
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
    const {  values, handleChange, handleBlur, handleSubmit, errors } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Nome" className="form-control mb-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nome}
            name="nome"
          />
          <span>{errors.nome}</span>
        </div>

        <div>
          <input
            placeholder="Email"
            className="form-control mb-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
          />
          <span>{errors.email}</span>
        </div>

        <div>
          <input
            placeholder="Telefone"
            className="form-control mb-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.telefone}
            name="telefone"
          />
          <span>{errors.telefone}</span>
        </div>

        <div>
          <input
            placeholder="Mensagem"
            className="form-control mb-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.mensagem}
            name="mensagem"
          />
          <span>{errors.mensagem}</span>
        </div>

        <button type="submit" className="btn btn-padrao btn-block mt-2">
          Enviar
        </button>
      </form>
    );
  }
}
export default enhanceWithFormik(Formulario);