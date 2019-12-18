import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .swap-on-hover {
    position: relative;
    margin: 0 auto;
  }

  .swap-on-hover img {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .swap-on-hover .swap-on-hover__front-image {
    z-index: 9999;
    transition: opacity 0.5s linear;
    cursor: pointer;
  }
  .swap-on-hover:hover > .swap-on-hover__front-image {
    opacity: 0;
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
          <figure class="swap-on-hover">
            <img
              class="swap-on-hover__front-image"
              src="/images/brands/heinz.jpg"
              alt="our-clients"
            />
            <img
              class="swap-on-hover__back-image"
              src="/images/brands/heinz-color.jpg"
            />
          </figure>
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
