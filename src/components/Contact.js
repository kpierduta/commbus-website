import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const Section = styled.div`
  background: #487c92;
  .container {
    margin-top: 4rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 2rem;
    margin: 2rem 0rem 2rem 0rem;
  }
  .image {
    width: 500px;
    height: auto;
    margin: 0 auto;
    object-position: center;
  }
  .button {
    height: 4rem;
    width: 12rem;
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
          <h1 className="title is-1 has-text-weight-bold has-text-white">
            Event Support Vehicles, equipment and event support staff
          </h1>
          <p className="has-text-white is-size-3 has-text-weight-light">
            We are your reliable team of event experts with experience of
            supporting events accross the country. We promise to deliver and
            meet exact requirements with a friendly, honest and professional
            approach.
          </p>
          <p className="has-text-white is-size-3">
            Weather you need a vehicle for your event, equipment and team
            members our solution take the hassle out of your event and provide
            you with all the crucial elements to make it a success.
          </p>
          <p className="has-text-white is-size-3">
            Please contact us for a friendly conversation on how we can help
            you.
          </p>
          <p className="has-text-white is-size-3">
            We aim to reply to your enquiry within 2 working days.
          </p>
        </div>
        <div className="column">
          <h1 className="title is-1 has-text-weight-bold has-text-white">
            Contact Us
          </h1>
          <p className="has-text-white is-size-4">
            We aim to reply to your enquiry within 2 working days.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  </Section>
);

export default Contact;
