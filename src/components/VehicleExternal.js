import React from 'react';
import styled from 'styled-components';

import VehicleBranding from './VehicleBranding';

const Container = styled.div`
  .hero-body {
    padding-bottom: 0rem;
  }
  p {
    margin: 2rem 0rem 2rem 0rem;
  }
`;

const Wrapper = styled.div`
  margin: 5rem 0rem;

  :first-child {
    margin: 0rem !important;
  }
  :last-child {
    margin: 0rem 0rem;
  }
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
          <Wrapper>
            <VehicleBranding data={item} />
          </Wrapper>
        ))}
      </Container>
    );
  }
}

export default VehicleExternal;
