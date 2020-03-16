import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';

const Section = styled.section`
  h1 {
    margin: 3rem 0 3rem 0;
    margin-bottom: 3rem;
  }
  .hero {
    border: 2px solid black;
  }
`;

const AboutSection = ({ data }) => (
  <Section className="section  has-text-centered">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-8">
          <Heading title={data.sectionHeading} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-6 is-flex">
          <section className="hero is-medium">
            <div className="hero-body">
              <div className="container">
                <h2 className="subtitle">
                  {data.firstParagraph.firstParagraph}
                </h2>
              </div>
            </div>
          </section>
        </div>
        <div className="column is-6 is-flex">
          <section className="hero is-medium">
            <div className="hero-body">
              <div className="container">
                <h2 className="subtitle">
                  {data.secondParagraph.secondParagraph}
                </h2>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default AboutSection;
