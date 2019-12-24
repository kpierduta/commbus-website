import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .column is-2 {
    margin-top: 1rem;
  }
`;

const Logo = styled.div`
  background: url(${props => props.logo});
  height: 8rem;
  background-size: 190px 250px !important;
  background-repeat: no-repeat !important;
  transition-duration: 2s;
  :hover {
    background-repeat: no-repeat;
    height: 7rem;
    background: rgba(0, 0, 0, 0) url(${props => props.logo}) repeat scroll 0
      bottom;
  }
`;

const OurClient = () => (
  <Section className="section">
    <div className="container">
      <h2 className="subtitle is-5 has-text-weight-bold is-uppercase has-text-centered-mobile">
        Trusted by
      </h2>
      <div className="columns is-multiline">
        <div className="column is-2">
          <Logo logo="/images/brands/heinz.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/asda.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/itv.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/sainsbury.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/anglia.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/fca.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/staff.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/bcc.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/gemalto.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/ukfast.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/appren.jpg" />
        </div>
        <div className="column is-2">
          <Logo logo="/images/brands/slimming.jpg" />
        </div>
      </div>
    </div>
  </Section>
);

export default OurClient;
