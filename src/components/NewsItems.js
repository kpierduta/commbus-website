import React from 'react';

import styled from 'styled-components';

import { Link } from 'gatsby';

const Section = styled.div`
  .hero.is-medium {
    background-image: url(${props => props.bgImage});
    background-repeat: no-repeat;
  }
  .hero-body {
    padding-bottom: 3rem !important;
  }
  .button.is-medium {
    margin-top: 7rem;
  }
`;

const NewsItems = ({ title, bgImage, link }) => {
  return (
    <Section className="column is-half" bgImage={bgImage}>
      <div className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <figure className="image is-32x32">
              <img src="/images/news/overlay@2x.jpg" alt="news" />
            </figure>
            <h1 className="title is-size-5 is-pulled-right">{title}</h1>
            <Link
              className="button is-medium is-link is-pulled-right"
              to={link}>
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NewsItems;
