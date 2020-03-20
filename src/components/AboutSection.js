import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';

const Section = styled.section`
  h1 {
    font-size: ${props => props.theme.fontSizeLarge};
    font-weight: 600;
    margin: 1rem 0 3rem 0;
  }
  h2 {
    font-size: ${props => props.theme.fontSizeMedium};
    font-weight: 600;
    margin: 3rem 0 1rem 0;
  }
  p {
    margin: 1rem;
  }
  .hero {
    border: 2px solid black;
  }
`;

const AboutSection = ({ data }) => (
  <Section className="section  has-text-centered">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-9">
          <Heading title={data.sectionHeading} />
          <h1 className="subtitle">{data.sectionSubtitle}</h1>
        </div>
      </div>
      <div className="columns">
        <div className="column is-6 is-flex">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <div
                  className="subtitle"
                  dangerouslySetInnerHTML={{
                    __html: data.firstParagraph.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </section>
        </div>
        <div className="column is-6 is-flex">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <div
                  className="subtitle"
                  dangerouslySetInnerHTML={{
                    __html: data.secondParagraph.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default AboutSection;
