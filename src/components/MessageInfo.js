import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .columns {
    background: #487c92;
  }
  .column:first-child {
    padding: 3rem 12rem 3rem 3rem;
  }
  button {
    height: 100%;
    background: #274550;
  }
  .icon {
    font-size: 5rem;
  }
  .all-text {
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const MessageInfo = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="has-text-weight-semibold has-text-white all-text">
            Experienced event professional on hand 24/7 for your event
          </h1>
          <p className="has-text-white all-text">
            Commbus are responsive and helpful event experts. Weather you are
            looking for a vehicle or equipment for your event we focus on
            exceeding your expectations, being reliable, open, honest and
            professional.
          </p>
        </div>
        <div className="column is-5">
          <button className="button is-fullwidth is-large" type="button">
            <span className="icon has-text-white">
              <i className="far fa-envelope" />
            </span>
            <span className="is-uppercase is-size-3 has-text-white all-text">
              Find out more
            </span>
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default MessageInfo;
