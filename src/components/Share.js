import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1rem 1.5rem;
  background: #487c92;
  .icon {
    font-size: 2rem;
    margin-right: 1.75rem;
  }
`;

const Share = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <div className="columns ">
            <div className="column is-4">
              <h4 className="title is-4 has-text-white has-text-weight-medium">
                SHARE OUR ARTICLE
              </h4>
            </div>
            <div className="column">
              <span className="icon has-text-white">
                <i className="fab fa-whatsapp"></i>
              </span>
              <span className="icon has-text-white">
                <i className="fab fa-linkedin-in"></i>
              </span>
              <span className="icon has-text-white">
                <i className="fab fa-facebook-square"></i>
              </span>
              <span className="icon has-text-white">
                <i className="fab fa-twitter"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Share;
