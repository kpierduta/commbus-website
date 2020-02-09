import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';

import FeatureItem from './FeatureItem';

const Section = styled.div`
  background: ${props => props.theme.mainBrandColor};
`;

class Features extends React.Component {
  render() {
    const { Feature } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <Heading title={Feature.featureSectionTitle} color="#fff" />
          <div className="hero">
            <div className="hero-body">
              <div className="columns">
                <FeatureItem
                  img={Feature.iconOne.file.url}
                  title={Feature.featureOneTitle}
                  subtitle={Feature.featureOneSubtitle}
                />
                <FeatureItem
                  img={Feature.iconTwo.file.url}
                  title={Feature.featureTwoTitle}
                  subtitle={Feature.featureTwoSubtitle}
                />
                <FeatureItem
                  img={Feature.iconThird.file.url}
                  title={Feature.featureThirdTitle}
                  subtitle={Feature.featureThirdSubtitle}
                />
                <FeatureItem
                  img={Feature.iconFour.file.url}
                  title={Feature.featureFourTitle}
                  subtitle={Feature.featureFourSubtitle}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Features;
