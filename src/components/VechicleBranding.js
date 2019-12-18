import React from 'react';
import styled from 'styled-components';

import Button from './elements/Button';

const Section = styled.section`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media screen and (max-width: 768px) {
    background-size: auto;
    background-image: none;
  }

  p {
    margin: 1rem 0rem 5rem 0rem;
  }
`;

const VechicleBranding = ({ title, subtitle, para, bgImage, to }) => (
  <Section bgImage={bgImage}>
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <section className="hero">
            <div className="hero-body">
              <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
                {title}
              </h1>
              <p>{subtitle}</p>
              <p>{para}</p>
              <Button width="14rem" background="transparent" to={to}>
                Learn More
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default VechicleBranding;
