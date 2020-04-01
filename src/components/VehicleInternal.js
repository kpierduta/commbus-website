import React from 'react';
import styled from 'styled-components';

import VehicleBranding from './VehicleBranding';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  .hero-body {
    padding-bottom: 0rem;
  }
  p {
    margin: 2rem 0rem 2rem 0rem;
  }
`;

const Wrapper = styled.div`
  margin: 5rem 0rem;
  :last-child {
    margin: 0rem 0rem;
  }
  :first-child {
    margin: 0rem !important;
  }
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
          <Wrapper>
            <VehicleBranding data={item} />
          </Wrapper>
        ))}
      </Container>
    );
  }
}

export default VehicleInternal;
