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
    font-size: 22px;
    font-weight: 600;
    margin: 3rem 0 1rem 0;
  }
  p {
    font-size: 16px !important;
    margin: 2.4rem;
    line-height: 24px;
    font-weight: 300;
    color: ${props => props.theme.darkShades};
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
  </Section>
);

export default AboutSection;
