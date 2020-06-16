import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Section = styled.section`
  .container {
    background-color: ${props => props.theme.backgroundInputColor};
  }

  button {
    padding: 0rem 3rem;
    height: 6rem;
    background: ${props => props.theme.darkShades};
  }
  span {
    font-family: ${props => props.theme.secondaryFontFamily} !important;
  }
  .icon.is-medium {
    margin-right: 0.4em;
  }
`;

const MessageInfo = ({ data }) => (
  <Section className="section">
    <div className="container">
      <div className="hero is-small">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-8 has-text-centered-mobile">
              <h1 className="title is-4 has-text-weight-normal has-text-white ">
                {data.messageTitle}
              </h1>
              <p className="subtitle is-6 has-text-white all-text">
                {data.messageSubtitle}
              </p>
            </div>
            <div className="column has-text-centered">
              <Link to="/case-study">
                <button className="button is-large" type="button">
                  <span className="icon is-medium">
                    <img src="/images/icon/chaticon.png" alt="" />
                  </span>{' '}
                  <span className="subtitle is-4 has-text-white">
                    {data.buttonText}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default MessageInfo;
