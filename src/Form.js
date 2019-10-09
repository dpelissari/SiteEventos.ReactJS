import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('Informe o nome!')
    .min(5, 'O nome deve conter mais de 5 letras!')
    .max(100, 'O nome deve conter menos de 100 letras!'),
  telefone: Yup.string().required('Informe um telefone para contato'),
  email: Yup.string()
    .required('Informe o email!')
    .email('Informe um email válido!'),
    mensagem: Yup.string().required('o campo mensagem é obrigatório!'),
})

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ nome: '', telefone: '', email: '', mensagem: '' }),
  handleSubmit: values => {
    console.log(values)
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: 'Formulário de contato',
  validationSchema: schema
})


 class Formulario extends React.Component {
  constructor(props) {
	super(props);
  }

  render() {
	return (
    <Form>
      <div>
        <Field name="nome" placeholder="Nome" className="form-control mb-2" />
        <ErrorMessage name="nome" />
      </div>

      <div>
        <Field name="email" placeholder="Email" className="form-control mb-2" />
        <ErrorMessage name="email" />
      </div>

      <div>
        <Field name="telefone" placeholder="Telefone" className="form-control mb-2" />
        <ErrorMessage name="telefone" />
      </div>

      <div>
        <Field name="mensagem" placeholder="Mensagem" className="form-control mb-2" />
        <ErrorMessage name="mensagem" />
      </div>
      
      <button type="submit" className="btn btn-padrao btn-block mt-2">Enviar</button>
  </Form>
	)
  }

}export default enhanceWithFormik(Formulario)