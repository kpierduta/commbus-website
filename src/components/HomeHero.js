import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
  }
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 100%;

  @media only screen and (min-width: 1407px) {
    background-size: contain;
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
  h2 {
    line-height: 1.5rem !important;
  }
`;

class HomeHero extends React.Component {
  render() {
    const { mobileImage, bgImage, title, heading, subtitle, text } = this.props;
    return (
      <Section className="section" bgImage={bgImage} mobileImage={mobileImage}>
        <div className="container">
          <div className="columns">
            <div className="mobile is-hidden-widescreen-only" />
            <div className="column is-4">
              <section className="hero is-pulled-left-widescreen-only">
                <div className="hero-body">
                  <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase is-spaced">
                    {title}
                  </h1>
                  <h2 className="subtitle  is-6 has-text-weight-semibold">
                    {heading}
                  </h2>
                  <p className="has-text-weight-light is-size-6">{subtitle}</p>
                  <p className="has-text-info">{text}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default HomeHero;
