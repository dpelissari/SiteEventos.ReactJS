import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import MaskedInput from 'react-text-mask';
import Swal from 'sweetalert2'

const schema = Yup.object().shape({
  nome: Yup.string()
    .required("* O campo nome é obrigatório")
    .min(3, "O nome deve conter ao menos 3 letras")
    .max(100, "O nome deve conter menos de 100 letras"),
  telefone: Yup.string().required("* O campo telefone é obrigatório"),
  email: Yup.string()
    .required("* O campo e-mail é obrigatório")
    .email("Ops: Informe um e-mail válido"),
  mensagem: Yup.string()
  .required("* O campo mensagem é obrigatório!")
  .min(20, "Sua mensagem deve conter ao menos 20 caracteres")
  .max(250, "Sua mensagem deve conter no máximo 250 caracteres")
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
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Sua mensagem foi enviada!',
          showConfirmButton: false,
          timer: 1500
        })

        resetForm(); 
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
      <form onSubmit={handleSubmit} id="form-contato">
        <div>
        <span className="erro-validacao">{errors.nome}</span>
          <input placeholder="Nome" className="form-control mb-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nome}
            name="nome"
          />
         
        </div>

        <div>
          <span className="erro-validacao">{errors.email}</span>
          <input
            placeholder="Email"
            className="form-control mb-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
          />
         
        </div>

        <div>
          <span className="erro-validacao">{errors.telefone}</span>
          <MaskedInput 
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
              className="form-control"
              placeholder="Telefone"
              className="form-control mb-2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.telefone}
              name="telefone"
          />

         
        </div>

        <div>
          <span className="erro-validacao">{errors.mensagem}</span>
          <textarea
            placeholder="Mensagem"
            className="form-control mb-3"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.mensagem}
            name="mensagem"
          />
         
        </div>

        <button type="submit" className="btn btn-padrao btn-block mt-2">Enviar</button>

      </form>
    );
  }
}
export default enhanceWithFormik(Formulario);