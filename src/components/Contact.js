import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const Section = styled.div`
  background: ${props => props.theme.mainBrandColor};

  .button {
    margin-top: 1rem;
  }

  input ::placeholder {
    color: #487c92;
    font-weight: bolder;
  }

  textarea ::placeholder {
    color: #487c92;
    font-weight: bolder;
  }
`;

const Contact = () => (
  <Section className="section is-medium">
    <div className="container">
      <div className="columns is-centered">
        <div className="column">
          <p className="subtitle has-text-white is-size-6  has-text-weight-light">
            With a wealth of experience across the events sector we can provide
            you with many services and solutions for your event or campaign.
          </p>
          <p className="subtitle has-text-white  is-size-6">
            From promotional buses, event support services commbus can tailer
            packages to suit your exact requirements
          </p>
          <p className="subtitle has-text-white  is-size-6">
            Contact us now for more information
          </p>
        </div>
        <div className="column">
          <h1 className="title is-2 has-text-weight-light has-text-white is-spaced">
            Contact Us
          </h1>

          <p className="subtitle is-6 has-text-white has-text-weight-light">
            We aim to reply to your enquiry within 1 working day.
          </p>

          <ContactForm />
        </div>
      </div>
    </div>
  </Section>
);

export default Contact;
