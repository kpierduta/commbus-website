import React from 'react';
import styled from 'styled-components';

import VechicleBranding from '../components/VechicleBranding';

const Section = styled.section`
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
            EXTERNAL BRANDING OPTIONS
          </h1>
          <p>
            We have options to suit your objectives and budget. Be creative and
            make your external graphics make an impact with your audience.{' '}
          </p>
        </div>
      </section>
      <VechicleBranding
        title="BANNER 
          GRAPHICS"
        subtitle="The light grey base colour of our fleet with tinted windows provides an ideal base for your external graphics."
        bgImage="/images/vehcilebarding/banner-image@2x.png"
      />
      <VechicleBranding
        title="OVERLAY 
          GRAPHICS"
        subtitle="You are not constrained to sticking to traditional T-bar banners or pushed into a full wrap."
        para="Get creative and make your graphics and message make an impact with your audience."
        bgImage="/images/vehcilebarding/overlay-image@3x.png"
      />
      <VechicleBranding
        title="full
          wrap"
        subtitle="Our fully wrapped buses are the largest moving advertising fomat available and are the ultimate branding statement."
        para="Get creative with over 40m2 of mobile advertising space.
          "
        bgImage="/images/vehcilebarding/full-wrap-image@3x.png"
      />
    </div>
  </Section>
);

export default VechicleExternal;
