import React from 'react';
import styled from 'styled-components';

import MyMapComponent from './GoogleMap';

const Section = styled.section`
  .title {
    margin-right: 0.5rem;
    @media screen and (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }
  .text {
    margin-top: 1rem;
    @media screen and (max-width: 768px) {
      margin-top: 0rem;
    }
  }

  .mail {
    @media screen and (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }
  .txt {
    margin-bottom: 0.5rem !important;
  }
`;

const Address = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <section className="section">
            <div>
              <h1 className="title is-4 has-text-weight-medium  is-spaced is-inline-block">
                Email:{' '}
              </h1>
              <h1 className="subtitle is-5 is-inline-block mail has-text-link">
                enquiries@commbus.com
              </h1>
            </div>
            <div>
              <h1 className="title is-spaced is-4 has-text-weight-medium is-inline-block">
                Phone number:{' '}
              </h1>
              <h1 className="subtitle is-5 is-inline-block mail">
                01675 463555
              </h1>
            </div>
            <div>
              <h1 className="title is-spaced is-4 has-text-weight-medium is-spaced">
                Postal Address:{' '}
              </h1>
              <h1 className="subtitle is-5 txt">Commbus Blythe Hall Farm,</h1>
              <h1 className="subtitle is-5 txt">Blythe Road,</h1>
              <h1 className="subtitle is-5 txt">Coleshill,</h1>
              <h1 className="subtitle is-5 txt">Birmingham,</h1>
              <h1 className="subtitle is-5 txt"> B46 2AF</h1>
            </div>
          </section>
        </div>

        <div className="column">
          {' '}
          <MyMapComponent isMarkerShown className="is-hidden-mobile" />
        </div>
      </div>
    </div>
  </Section>
);

export default Address;
