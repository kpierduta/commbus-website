import React from 'react';
import styled from 'styled-components';

import VehicleBranding from './VehicleBranding';

const Section = styled.section`
  p {
    margin: 2rem 0rem 2rem 0rem;
  }
`;

class VehicleExternal extends React.Component {
  render() {
    const { brand } = this.props;
    const { data } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <section className="hero">
            <div className="hero-body">
              <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
                {brand.sectionOneTitle}
              </h1>
              <p>{brand.sectionOneSubtitle.sectionOneSubtitle}</p>
            </div>
          </section>
          {data.map(item => (
            <VehicleBranding
              bgImage={item.thumbnailImage.file.url}
              title={item.blogTitle}
              subtitle={item.blogSubtitle.blogSubtitle}
              to={`vehicle-branding/${item.slug}`}
            />
          ))}
        </div>
      </Section>
    );
  }
}

export default VehicleExternal;
