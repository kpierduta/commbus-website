import React from 'react';
import styled from 'styled-components';

import VechicleBranding from '../components/VechicleBranding';

const Section = styled.section`
  background-color: #eef3f5;
  p {
    margin: 2rem 0rem 2rem 0rem;
  }
`;

class VechicleInternal extends React.Component {
  render() {
    const { brand } = this.props;
    const { data } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <section className="hero">
            <div className="hero-body">
              <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
                {brand.sectionTwoTitle}
              </h1>
              <p>{brand.sectionTwoSubtitle.sectionTwoSubtitle}</p>
            </div>
          </section>
          {data.map(item => (
            <VechicleBranding
              bgImage={item.thumbnailImage.file.url}
              title={item.blogTitle}
              subtitle={item.blogSubtitle.blogSubtitle}
              to={`vechicle-branding/${item.slug}`}
            />
          ))}
        </div>
      </Section>
    );
  }
}

export default VechicleInternal;
