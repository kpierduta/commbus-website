import React from 'react';
import styled from 'styled-components';

import VehicleBranding from './VehicleBranding';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundColor};
  p {
    margin: 2rem 0rem 2rem 0rem;
  }
  .hero-body {
    padding: 3rem 0rem 3rem 5rem;
  }
  @media only screen and (max-width: 1024px) {
    .hero-body {
      padding: 3rem 0rem 3rem 0rem;
    }
  }
`;

class VehicleInternal extends React.Component {
  render() {
    const { brand } = this.props;
    const { data } = this.props;
    return (
      <Section className="section">
        <section className="hero">
          <div className="hero-body">
            <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
              {brand.sectionTwoTitle}
            </h1>
            <p>{brand.sectionTwoSubtitle.sectionTwoSubtitle}</p>
          </div>
        </section>
        {data.map(item => (
          <VehicleBranding data={item} />
        ))}
      </Section>
    );
  }
}

export default VehicleInternal;
