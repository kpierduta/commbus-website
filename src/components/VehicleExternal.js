import React from 'react';
import styled from 'styled-components';

import VehicleBranding from './VehicleBranding';

const Container = styled.section`
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

class VehicleExternal extends React.Component {
  render() {
    const { brand } = this.props;
    const { data } = this.props;
    return (
      <Container>
        <section className="section">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
                  {brand.sectionOneTitle}
                </h1>
                <p>{brand.sectionOneSubtitle.sectionOneSubtitle}</p>
              </div>
            </div>
          </section>
        </section>
        {data.map(item => (
          <VehicleBranding data={item} />
        ))}
      </Container>
    );
  }
}

export default VehicleExternal;
