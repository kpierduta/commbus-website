import React from 'react';
import styled from 'styled-components';

import FeatureItem from './FeatureItem';
import firstImage from '../../static/images/icon/bus.svg';
import secondImage from '../../static/images/icon/eye.svg';
import thirdImage from '../../static/images/icon/shopping-cart.svg';
import fourthImage from '../../static/images/icon/review.svg';
import Heading from './elements/Heading';

const Section = styled.div`
  background: #487c92;
  h1 {
    margin-top: 2rem;
  }
`;

const Features = () => (
  <Section className="section">
    <div className="container">
      <Heading
        title="DEDICATED EVENTS TEAM | RANGE OF FLEET & EQUIPMENT"
        color="#fff"
      />
      <div className="columns">
        <FeatureItem
          img={firstImage}
          title="Difference vehicle options"
          subtitle="Single deck, double deck, vintage routemaster or open top bus.Our event support vehicles give you a mobile,
        flexible office style solution."
        />
        <FeatureItem
          img={secondImage}
          title="Vehicle branding"
          subtitle="Our fully wrap, overlay and banner graphics provide you with a branded produc toffice that stands out in
        the crowd."
        />
        <FeatureItem
          img={thirdImage}
          title="Hire shop"
          subtitle="We can supply you with a range of event equipment, from crowd barriers, cones to sound systems. See our
        hire shop."
        />
        <FeatureItem
          img={fourthImage}
          title="Experienced & hard working team"
          subtitle="We work 24/7 and not just 9 am - 5 pm to provide the round the clock support for all of
          our events."
        />
      </div>
    </div>
  </Section>
);

export default Features;
