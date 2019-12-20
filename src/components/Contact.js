import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const Section = styled.div`
  background: #487c92;
  .container {
    margin-top: 4rem;
  }
  h1 {
    padding: 0rem 13rem 0rem 0rem;
    @media screen and (max-width: 768px) {
      padding: 0rem 0rem 0rem 0rem;
    }
  }
  p {
    margin-bottom: 1rem;
    margin: 2rem 0rem 2rem 0rem;
    font-family: ${props => props.theme.primaryFontFamily};
    padding: 0rem 6rem 0rem 0rem;
    @media screen and (max-width: 768px) {
      padding: 0rem 0rem 0rem 0rem;
    }
  }
  .image {
    width: 500px;
    height: auto;
    margin: 0 auto;
    object-position: center;
  }
  .button {
    height: 3rem;
    width: 7rem;
    span {
      color: #487c92;
    }
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
          <h1 className="title is-2 has-text-weight-light has-text-white">
            promotional buses, event support vehicles, event equipment and crew
          </h1>
          <p className="has-text-white is-size-6 has-text-weight-bold has-text-weight-light">
            With a wealth of experience across the events sector we can provide
            you with many solutions for your event.
          </p>
          <p className="has-text-white has-text-weight-bold is-size-6">
            From promotional buses, event support vehicles, event equipment and
            crew we can tailor packages to suit your exact requirements to make
            your event a success.
          </p>
          <p className="has-text-white has-text-weight-bold is-size-6">
            Contact us now for more information, we aim to come back to you with
            1 working day.
          </p>
        </div>
        <div className="column">
          <h1 className="title is-2 has-text-weight-bold has-text-white">
            Contact Us
          </h1>
          <p className="has-text-white has-text-weight-bold is-size-6">
            We aim to reply to your enquiry within 2 working days.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  </Section>
);

export default Contact;
