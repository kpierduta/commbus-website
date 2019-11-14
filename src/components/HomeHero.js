import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url(/images/herobackground.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media screen and (max-width: 768px) {
    background-size: auto;
  }
  p {
    margin-top: 1rem;
    font-family: ${props => props.theme.primaryFontFamily};
    font-weight: 700;
    font-size: ${props => props.theme.fontSizeSmall};
    color: ${props => props.theme.textColorLite};
  }
  h2 {
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const HomeHero = ({ title, heading, subtitle, text }) => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <section className="hero">
            <div className="hero-body">
              <h2 className="title is-size-3-mobile has-text-weight-semibold is-uppercase">
                {title}
              </h2>
              <h2 className="has-text-weight-semibold">{heading}</h2>
              <p className="has-text-weight-light is-size-6">{subtitle}</p>
              <p className="has-text-info">{text}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
