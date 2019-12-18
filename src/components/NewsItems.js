import React from 'react';

import styled from 'styled-components';

import { Link } from 'gatsby';

const Section = styled.div`
  .columns {
    background-image: url(${props => props.bgImage});
    background-repeat: no-repeat;
  
  .button.is-medium {
    margin-top: 7rem;
  }
`;

const NewsItems = ({ title, bgImage, link }) => {
  return (
    <Section className="column is-half" bgImage={bgImage}>
      <section class="section">
        <div class="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              <h1 className="title has-text-white is-size-5">{title}</h1>
              <Link className="button is-medium is-link" to={link}>
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default NewsItems;
