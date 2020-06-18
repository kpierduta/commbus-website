import React from 'react';

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', phone: '', company: '', message: '' };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        this.setState({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        alert('Success!');
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, company, message } = this.state;
    return (
      <form data-netlify="true" name="contact" onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input is-medium is-radiusless"
              type="text"
              placeholder="Your name"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              name="email"
              className="input is-medium is-radiusless"
              value={email}
              type="email"
              placeholder="Your email"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              name="phone"
              className="input is-medium is-radiusless"
              type="tel"
              value={phone}
              placeholder="Your phone number"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              name="company"
              className="input is-medium is-radiusless"
              type="text"
              value={company}
              placeholder="Your company name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control is-medium">
            <textarea
              name="message"
              value={message}
              className="textarea is-medium is-radiusless"
              placeholder="Your message"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <p className="has-text-white is-size-6">
          In submitting this form you are agreeing to our
          <a
            href="/terms&Condition"
            className="has-text-white has-text-weight-bold"
          >
            {'   '}terms and conditions
          </a>
        </p>
        <button type="submit" className="button is-medium has-text-info">
          <span className="is-size-4">Submit</span>
        </button>
      </form>
    );
  }
}

export default ContactForm;
