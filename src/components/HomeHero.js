import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
  }
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background-image: none;
  }
  .test {
    height: 19rem;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(/images/photo_2020-01-02_14-58-43.jpg);
  }
  p {
    margin-top: 1rem;
    font-family: ${props => props.theme.primaryFontFamily};
    font-weight: 700;
    font-size: ${props => props.theme.fontSizeSmall};
    color: ${props => props.theme.textColorLite};
  }
  h2 {
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

class HomeHero extends React.Component {
  render() {
    return (
      <Section className="section" bgImage={this.props.bgImage}>
        <div className="container">
          <div className="columns">
            <div className="test is-hidden-widescreen-only"></div>
            <div className="column is-4">
              <section className="hero">
                <div className="hero-body">
                  <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
                    {this.props.title}
                  </h1>
                  <h2 className="has-text-weight-semibold">
                    {this.props.heading}
                  </h2>
                  <p className="has-text-weight-light is-size-6">
                    {this.props.subtitle}
                  </p>
                  <p className="has-text-info">{this.props.text}</p>
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
