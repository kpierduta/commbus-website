import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  background: url(${props => props.logo});
  height: 8rem;
  background-size: 190px 250px !important;
  @media screen and (max-width: 768px) {
    background-size: 312px 306px !important;
  }
  background-repeat: no-repeat !important;
  transition-duration: 2s;
  :hover {
    background-repeat: no-repeat;
    height: 7rem;
    background: rgba(0, 0, 0, 0) url(${props => props.logo}) repeat scroll 0
      bottom;
  }
`;

const OurClient = ({ logo }) => (
  <section className="section">
    <div className="container">
      <h2 className="subtitle is-5 has-text-weight-bold is-uppercase has-text-centered-mobile">
        Trusted by
      </h2>
      <div className="columns is-multiline">
        {logo.map(item => (
          <div className="column is-one-fifth">
            <Logo logo={item.file.url} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurClient;
