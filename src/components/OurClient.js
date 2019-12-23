import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  a {
    display: block;
    background: url(https://www.commbus.com/wp-content/uploads/2016/02/itv-logo.jpg);
    height: 73px;
    width: 154px;
    transition-duration: 1s;
    :hover {
      background: rgba(0, 0, 0, 0)
        url(https://www.commbus.com/wp-content/uploads/2016/02/itv-logo.jpg)
        repeat scroll 0 bottom;
    }
  }
`;

const OurClient = () => (
  <Section className="section">
    <div className="container">
      <h2 className="subtitle is-5 has-text-weight-bold is-uppercase has-text-centered-mobile">
        Trusted by
      </h2>
      <div className="columns is-multiline">
        <div className="column has-text-centered">
          <a>
            <figure className="image is-128x128">
              <img alt="" className="swap" />
            </figure>
          </a>
        </div>
        <div className="column has-text-centered">
          {' '}
          <img src="/images/brands/asda.jpg" alt="our-clients" />
        </div>
        <div className="column has-text-centered">
          {' '}
          <img src="/images/brands/itv.jpg" alt="our-clients" />
        </div>
        <div className="column has-text-centered">
          {' '}
          <img src="/images/brands/slimming-world.jpg" alt="our-clients" />
        </div>
        <div className="column has-text-centered">
          {' '}
          <img src="/images/brands/anglia.jpg" alt="our-clients" />
        </div>
      </div>
      <div className=" columns">
        <div className="column has-text-centered">
          {' '}
          <img src="/images/brands/fca.jpg" alt="our-clients" />
        </div>
        <div className="column has-text-centered">
          {' '}
          <img src="/images/brands/staff.jpg" alt="our-clients" />
        </div>
        <div className="column has-text-centered">
          {' '}
          <img src="/images/brands/bcc.jpg" alt="our-clients" />
        </div>
        <div className="column has-text-centered">
          {' '}
          <img src="/images/brands/gemalto.jpg" alt="our-clients" />
        </div>
        <div className="column has-text-centered">
          {' '}
          <img src="/images/brands/ukfast.jpg" alt="our-clients" />
        </div>
      </div>
    </div>
  </Section>
);

export default OurClient;
