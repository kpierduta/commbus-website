import React from 'react';
import styled from 'styled-components';

import VehicleBranding from './VehicleBranding';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  p {
    margin: 2rem 0rem 2rem 0rem;
  }
  /* .hero-body {
    padding: 3rem 1.25rem 3rem 5rem;
  }
  @media only screen and (max-width: 1024px) {
    .hero-body {
      padding: 3rem 2rem;
    }
  } */
`;

class VehicleInternal extends React.Component {
  render() {
    const { brand } = this.props;
    const { data } = this.props;
    return (
      <Container>
        <section className="section">
          <div className="container">
            <section className="hero">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
                    {brand.sectionTwoTitle}
                  </h1>
                  <p>{brand.sectionTwoSubtitle.sectionTwoSubtitle}</p>
                </div>
              </div>
            </section>
          </div>
        </section>
        {data.map(item => (
          <VehicleBranding data={item} />
        ))}
      </Container>
    );
  }
}

export default VehicleInternal;
