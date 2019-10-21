import React from 'react';
import styled from 'styled-components';

const Section = styled.section``;

const OurClient = () => (
  <Section className="section">
    <div className="container">
      <h2 className="subtitle is-5 has-text-weight-bold">Trusted by</h2>
      <div className="columns is-multiline">
        <div className="column is-2">
          <img src="/images/brands/heinz-client-logo-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/sainsburys-client-logo-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/kier-client-logo-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/sainsburys-client-logo-copy-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/staffordshire-university-client-logo-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/breast-cancer-care-client-logo-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/asda-client-logo-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/gemalto-client-logo-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/anglia-ruskin-client-logo-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/fca-client-logo-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/apprenticeships-client-logo-200x83.png" />
        </div>
        <div className="column is-2">
          {' '}
          <img src="/images/brands/uk-fast-client-logo-200x83.png" />
        </div>
      </div>
    </div>
  </Section>
);

export default OurClient;
