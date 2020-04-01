import React from 'react';
import styled from 'styled-components';

import Button from './elements/Button';

const Section = styled.section`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 100%;

  @media only screen and (min-width: 1407px) {
    background-position: center;
    background-size: 60%;
  }

  @media screen and (max-width: 768px) {
    background-image: none;
  }
  .mobile {
    min-height: 19rem;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.mobileImage});
  }
  .hero-body {
    padding: 3rem 3rem 3rem 0rem !important;
  }
`;

const VehicleBranding = ({ data }) => {
  return (
    <Section
      className="section"
      bgImage={data.thumbnailImage.file.url}
      mobileImage={data.mobileThumbnail.file.url}
    >
      <div className="container">
        <div className="columns">
          <div className="mobile is-hidden-widescreen-only" />
          <div className="column is-4">
            <section className="hero is-pulled-left-widescreen-only">
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
