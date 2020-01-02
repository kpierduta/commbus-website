import React from 'react';
import styled from 'styled-components';

import FeatureItem from './FeatureItem';
import Heading from './elements/Heading';

const Section = styled.div`
  background: #3c3c3a;
`;

class FeaturesSubPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <Heading title={data.featureSectionTitle} color="#fff" />
          <div className="columns">
            <FeatureItem
              img={data.iconOne.file.url}
              title={data.featureOneTitle}
              subtitle={data.featureOneSubtitle}
            />
            <FeatureItem
              img={data.iconThird.file.url}
              title={data.featureTwoTitle}
              subtitle={data.featureTwoSubtitle}
            />
            <FeatureItem
              img={data.iconOne.file.url}
              title={data.featureThirdTitle}
              subtitle={data.featureThirdSubtitle}
            />
            <FeatureItem
              img={data.iconFour.file.url}
              title={data.featureFourTitle}
              subtitle={data.featureFourSubtitle}
            />
          </div>
        </div>
      </Section>
    );
  }
}

export default FeaturesSubPage;
