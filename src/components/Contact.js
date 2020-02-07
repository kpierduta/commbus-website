import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const Section = styled.div`
  background: #487c92;
  .container {
    margin-top: 4rem;
  }
  .subtitle {
    margin: 2rem 0rem 2rem 0rem !important;
    font-family: ${props => props.theme.primaryFontFamily};
    padding: 0rem 6rem 0rem 0rem important;
    @media screen and (max-width: 768px) {
      padding: 0rem 0rem 0rem 0rem;
    }
  }
  .has-text-white {
    color: #ffff !important;
  }
  .image {
    width: 500px;
    height: auto;
    margin: 0 auto;
    object-position: center;
  }
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
  <Section className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column">
          {/* <h1 className="title is-2 has-text-weight-light has-text-white">
            promotional buses, event support vehicles, event equipment and crew
          </h1> */}
          <p className="subtitle has-text-white is-size-6 has-text-weight-bold has-text-weight-light">
            With a wealth of experience across the events sector we can provide
            you with many services and solutions for your event or campaign.
          </p>
          <p className="subtitle has-text-white has-text-weight-bold is-size-6">
            From promotional buses, event support services commbus can tailer
            packages to suit your exact requirements
          </p>
          <p className="subtitle has-text-white has-text-weight-bold is-size-6">
            Contact us now for more information
          </p>
        </div>
        <div className="column">
          <h1 className="title is-2 has-text-weight-light has-text-white is-pulled-right">
            Contact Us
          </h1>
          <p className="subtitle has-text-white has-text-weight-bold is-size-6">
            We aim to reply to your enquiry within 1 working day.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  </Section>
);

export default Contact;
