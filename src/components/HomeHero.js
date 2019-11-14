import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url(${props => props.bgImage});
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

const HomeHero = ({ title, heading, subtitle, text, bgImage }) => (
  <Section className="section" bgImage={bgImage}>
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <section className="hero">
            <div className="hero-body">
              <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
                {title}
              </h1>
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
