import React from 'react';

import styled from 'styled-components';

import { Link } from 'gatsby';

const Section = styled.div`
  padding: 2rem 0rem;
  .columns {
    height: 22rem;
    background-image: url(${props => props.bgImage});
    background-repeat: no-repeat;
  }
  .section {
    padding: 3rem 2.5rem;
  }
  .button.is-medium {
    margin-top: 2rem;
  }
`;

const NewsItems = ({ title, bgImage, link }) => {
  return (
    <Section className="column is-half" bgImage={bgImage}>
      <div className="columns">
        <div className="column is-4"></div>
        <div className="column">
          <section className="section">
            <div className="container">
              <h1 className="title has-text-white is-3 has-text-weight-medium">
                {title}
              </h1>
              <Link className="button is-medium is-link" to={link}>
                READ MORE
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Section>
  );
};

export default NewsItems;
