import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 5rem;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 768px) {
    background-size: auto;
    background-image: none;
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
    const { page } = this.props;

    console.log('page', page);
    return (
      <Section
        className="section"
        bgImage={this.props.bgImage ? this.props.bgImage : page.image.file.url}
      >
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <section className="hero">
                <div className="hero-body">
                  <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
                    {this.props.title ? this.props.title : page.title}
                  </h1>
                  <h2 className="has-text-weight-semibold">
                    {this.props.heading}
                  </h2>
                  <p className="has-text-weight-light is-size-6">
                    {this.props.subtitle
                      ? this.props.subtitle
                      : page.details.details}
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
