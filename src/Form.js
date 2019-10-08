import React from 'react';

export default class Formulario extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', fone: '', email: ''};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
        <form id="contact-form">
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Email</label>
        <input type="email" name="user_fone" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
    </form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit() {
    const templateId = 'template_id';
	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }


  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

}