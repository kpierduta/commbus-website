import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: url(/images/herobackground.png);
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 600px) {
    background-size: auto;
  }
  p {
    margin-top: 1rem;
    margin-bottom: 3rem;
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
              <h2 className="title is-1 is-size-3-mobile has-text-weight-semibold">
                We design, build & manage successful promotional bus campaigns.
              </h2>
              <h2 className="has-text-info">“Making Marketing Human”</h2>
              <p className="has-text-weight-light is-size-6">
                “Our promotional buses give meaning to experiential marketing,
                taking your marketing campaigns on the road directly to who
                matters – your target audience” –
                <span className="is-italic">
                  {' '}
                  Clare Macleod, Marketing Director
                </span>
              </p>
              <a className="button is-medium is-link">VIEW PROJECTS</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
