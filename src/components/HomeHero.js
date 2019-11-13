import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: url(/images/herobackground.png);
  background-repeat: no-repeat;
  background-size: cover;
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

const HomeHero = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <section className="hero">
            <div className="hero-body">
              <h2 className="title is-size-3-mobile has-text-weight-semibold is-uppercase">
                We design, build & manage successful promotional bus campaigns
              </h2>
              <p className="has-text-weight-light is-size-6">
                “Our promotional buses give meaning to experiential marketing,
                taking your marketing campaigns on the road directly to who
                matters – your target audience”
              </p>
              <p className="has-text-info">
                “ Clare Macleod, Marketing Director”
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
