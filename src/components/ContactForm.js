import React from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', phone: '', company: '', message: '' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  render() {
    const { name, email, phone, company, message } = this.state;
    return (
      <form
        className="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        data-netlify-recaptcha="true"
      >
        <div className="field">
          <div className="control">
            <input
              id="name"
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
              id="email"
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
              id="phone"
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
              id="company"
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
              id="message"
              name="message"
              value={message}
              className="textarea is-medium is-radiusless"
              placeholder="Your message"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <p className="has-text-white is-size-6">
          In submitting you are agree to our{' '}
          <span className="has-text-white has-text-weight-bold">
            terms and conditions
          </span>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit" className="button">
          <span className="is-size-4">Submit</span>
        </button>
      </form>
    );
  }
}

export default ContactForm;
