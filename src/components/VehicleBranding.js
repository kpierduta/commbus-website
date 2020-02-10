import React from 'react';
import styled from 'styled-components';

import Button from './elements/Button';

const Section = styled.section`
  margin: 4rem 0rem;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 768px) {
    background-size: auto;
    background-image: none;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    background-size: auto;
  }
  .mobile {
    min-height: 19rem;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.mobileImage});
  }
`;

const VehicleBranding = ({ data }) => {
  return (
    <Section
      bgImage={data.thumbnailImage.file.url}
      mobileImage={data.mobileThumbnail.file.url}
    >
      <div className="container">
        <div className="columns">
          <div className="mobile is-hidden-widescreen-only" />
          <div className="column is-4">
            <section className="hero">
              <div className="hero-body">
                <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
                  {data.blogTitle}
                </h1>
                <p>{data.blogSubtitle.blogSubtitle}</p>
                <Button width="14rem" background="transparent" to={data.slug}>
                  Learn More
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VehicleBranding;
