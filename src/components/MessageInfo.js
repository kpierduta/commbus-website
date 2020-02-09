import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .container {
    background-color: ${props => props.theme.backgroundInputColor};
  }
  button {
    element.style {
      padding: 0rem 3rem;
      height: 6rem;
    }
    background: ${props => props.theme.darkShades};
  }
`;

const MessageInfo = () => (
  <Section className="section">
    <div className="container">
      <div className="hero is-small">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-8 has-text-centered-mobile">
              <h1 className="title is-4 has-text-weight-normal has-text-white ">
                Experienced event professional on hand 24/7 for your event
              </h1>
              <p className="subtitle is-6 has-text-white all-text">
                Commbus are responsive and helpful event experts. Weather you
                are looking for a vehicle or equipment for your event we focus
                on exceeding your expectations, being reliable, open, honest and
                professional.
              </p>
            </div>
            <div className="column has-text-centered">
              <button className="button is-large" type="button">
                <span className="icon is-medium">
                  <img src="/images/icon/chaticon.png" alt="" />
                </span>
                <span className="subtitle is-4 has-text-white">
                  Find out more
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default MessageInfo;
