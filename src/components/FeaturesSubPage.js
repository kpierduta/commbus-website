import React from 'react';
import styled from 'styled-components';

import FeatureItem from './FeatureItem';
import Heading from './elements/Heading';

const Section = styled.div`
  background: #3c3c3a;
`;

const FeaturesSubPage = () => (
  <Section className="section">
    <div className="container">
      <Heading
        title="OVER 100 YEARS COMBINED EXPERIENCE | DEDICATED QUALIFIED TEAM"
        color="#fff"
      />
      <div className="columns">
        <FeatureItem
          img="/images/projecticons/icons@2x.jpg"
          title="Your dedicated project"
          subtitle="
          Your dedicated project manager works alongside from initial planning planning to launching your campaign on the road."
        />
        <FeatureItem
          img="/images/projecticons/vehicle-icon@2x.jpg"
          title="Vehicle branding"
          subtitle="
          Scaled templates for both externally and internally designing and branding the fleet of vehicles."
        />
        <FeatureItem
          img="/images/projecticons/qualified-icon@2x.jpg"
          title="Qualified"
          subtitle="We are licensed internal and national operators, ensuing you are legal with government DVSA requirements. Our drivers a trained, uniformed and hold legal drivers CPC qualifications."
        />
        <FeatureItem
          img="/images/projecticons/experienced-icon@2x.jpg"
          title="Experienced & hard working"
          subtitle="We have the knowledge and experience of providing promotional buses for over 20 years. All costs are provided upfront during the planning stage and there are no hidden fees."
        />
      </div>
    </div>
  </Section>
);

export default FeaturesSubPage;
