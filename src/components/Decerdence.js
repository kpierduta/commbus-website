import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border-bottom: 20px solid ${props => props.theme.mainBrandColor};
  .has-text-danger {
    color: #8a2324 !important;
  }
  .button.is-danger {
    margin-top: 1.5rem;
    background-color: #8a2324 !important;
  }
`;

const Decerdence = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-one-fifth">
          <img src="/images/deckerdence.png" alt="deckerdence-logo" />
        </div>
        <div className="column is-7">
          <h1 className="title is-6 has-text-danger">
            Have you seen our sister company Deckerdence?{' '}
          </h1>
          <p className="subtitle is-6">
            Deckerdence is our Unique Mobile Venue, perfect for Weddings,
            Events, Parties & Hospitality. With various hire options from
            attached canopy to full wrap around marquee we can create the
            perfect setting for your event.
          </p>
        </div>
        <div className="column has-text-centered">
          <a
            href="https://www.deckerdence.com/"
            type="button"
            className="button is-large is-fullwidth is-danger"
          >
            FIND OUT MORE
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export default Decerdence;
