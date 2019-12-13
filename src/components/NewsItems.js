import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  .button.is-medium {
    margin-top: 7rem;
  }
`;

const NewsItems = ({ title, bgImage }) => {
  return (
    <Section className="hero is-medium" bgImage={bgImage}>
      <div className="hero-body">
        <div className="container">
          <figure className="image is-32x32">
            <img src="/images/news/overlay@2x.jpg" alt="news" />
          </figure>
          <h1 className="title is-size-5 is-pulled-right">{title}</h1>
          <button
            className="button is-medium is-link is-pulled-right"
            type="button">
            READ MORE
          </button>
        </div>
      </div>
    </Section>
  );
};

export default NewsItems;
