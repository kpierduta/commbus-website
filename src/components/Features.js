import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';

import FeatureItem from './FeatureItem';

const Section = styled.div`
  background: ${props => props.theme.lightShades};
`;

const Features = ({ Feature }) => (
  <Section className="section">
    <div className="container">
      <Heading
        title="DEDICATED EVENTS TEAM | RANGE OF FLEET & EQUIPMENT"
        color="#fff"
      />
      <div className="columns">
        {Feature.map(item => (
          <FeatureItem
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  </Section>
);

export default Features;
