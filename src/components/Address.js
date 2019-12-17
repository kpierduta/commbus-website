import React from 'react';
import styled from 'styled-components';

import MyMapComponent from './GoogleMap';

const Section = styled.section`
  .title {
    margin-right: 0.5rem;
  }
  .text {
    margin-top: 1rem;
  }
`;

const Address = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title is-2">Contact Details</h1>
          <div>
            <h1 className="title is-4 has-text-weight-medium is-inline-block">
              Email:{' '}
            </h1>
            <h1 className="subtitle is-5 is-inline-block">sales@commbus.com</h1>
          </div>
          <div>
            <h1 className="title is-4 has-text-weight-medium is-inline-block">
              Phone number:{' '}
            </h1>
            <h1 className="subtitle is-5 is-inline-block">01675 463555</h1>
          </div>
          <div>
            <h1 className="title is-4 has-text-weight-medium is-inline-block">
              Fax:{' '}
            </h1>
            <h1 className="subtitle is-5 is-inline-block">01675 462111</h1>
          </div>
          <div>
            <h1 className="title is-4 has-text-weight-medium is-spaced">
              Postal Address:{' '}
            </h1>
            <h1 className="subtitle is-5">
              Combus Blyth Hall Farm, Blyth Road, Coleshill, Birmingham, B46
              2AF,
            </h1>
          </div>
          <div>
            <h1 className="title is-4 has-text-weight-medium is-spaced text">
              Operation Base & Deliveries:
            </h1>
            <h1 className="subtitle is-5">
              Blyth Hall Farm, Blyth Road, Coleshill,Blyth Hall Farm, Blyth
              Road, Coleshill,
            </h1>
          </div>
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
