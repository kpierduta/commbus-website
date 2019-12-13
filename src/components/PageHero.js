import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1rem 1.5rem 0.25rem 1.5rem;
  background: #3b3b3a;
`;

const PageHero = ({ title, heading }) => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <section className="hero">
            <div className="hero-body">
              <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase has-text-white">
                {title}
              </h1>
              <p className="has-text-white">{heading}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default PageHero;
