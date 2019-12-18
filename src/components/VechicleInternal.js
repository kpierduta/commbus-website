import React from 'react';
import styled from 'styled-components';

import VechicleBranding from '../components/VechicleBranding';

const Section = styled.section`
  background-color: #eef3f5;
  p {
    margin: 2rem 0rem 2rem 0rem;
  }
`;

const VechicleExternal = () => (
  <Section className="section">
    <div className="container">
      <section className="hero">
        <div className="hero-body">
          <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
            INTERNAL BRANDING OPTIONS
          </h1>
          <p>
            All our hire fleet of buses have been pre-converted with all
            amenities in place including, full electrics throughout, internal
            lighting, heating and air conditioning. Our buses have been designed
            to accommodate kitchen facilities and storage areas. Our double-deck
            buses have ramp access to the lower deck.
          </p>
        </div>
      </section>
      <VechicleBranding
        title="BANNER 
          GRAPHICS"
        subtitle="The light grey base colour of our fleet with tinted windows provides an ideal base for your external graphics."
        bgImage="/images/vehcilebarding/simple-internal-image@3x.png"
        to="/banner"
      />
      <VechicleBranding
        title="OVERLAY 
          GRAPHICS"
        subtitle="You are not constrained to sticking to traditional T-bar banners or pushed into a full wrap.
          Get creative and make your graphics and message make an impact with your audience."
        bgImage="/images/vehcilebarding/bespoke-internal-image@3x.png"
        to="/banner"
      />
    </div>
  </Section>
);

export default VechicleExternal;
