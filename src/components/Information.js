import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 6.1rem;
  .note {
    margin-top: 1rem !important;
  }
`;

const Information = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-4 has-text-weight-medium  is-spaced is-inline-block">
        Email:{' '}
      </h1>
      <a
        href="mailto:enquiries@commbus.com"
        className="subtitle is-5 has-text-link"
      >
        enquiries@commbus.com
      </a>
      <div>
        <h1 className="title is-spaced is-4 has-text-weight-medium is-inline-block">
          Phone number:{' '}
        </h1>
        <a href="tel:01675463555" className="subtitle is-5">
          01675 463555
        </a>
      </div>
      <h1 className="title is-spaced is-4 has-text-weight-medium is-spaced">
        Postal Address:
      </h1>
      <h2 className="subtitle is-5">
        Commbus
        <span>Blythe Hall Farm,</span>
        <span>Blythe Road,</span>
        <span>Coleshill,</span>
        <span>Birmingham,</span>
        <span> B46 2AF</span>
      </h2>
      <h1 className="title is-4 has-text-weight-medium note">
        Visitors by appointment only.
      </h1>
    </div>
  </Section>
);

export default Information;
