import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';
import MarketingCard from './MarketingCard';

const Section = styled.section``;

class Marketing extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <Heading title={data.campaignSectionTitle} />
          <div className="columns is-multiline">
            <MarketingCard
              img={data.campaignFirstIcon.file.url}
              alt={data.campaignFirstIcon.title}
              heading={data.campaignFirstTitle}
              description={data.campaignFirstSubtitle.campaignFirstSubtitle}
              to={data.campaignFirstLink}
            />
            <MarketingCard
              img={data.campaignSecondIcon.file.url}
              alt={data.campaignSecondIcon.title}
              heading={data.campaignSecondTitle}
              description={data.campaignSecondSubtitle.campaignSecondSubtitle}
              to={data.campaignSecondLink}
            />
            <MarketingCard
              img={data.campaignThirdIcon.file.url}
              alt={data.campaignThirdIcon.title}
              heading={data.campaignThirdTitle}
              description={data.campaignThirdSubtitle.campaignThirdSubtitle}
              to={data.campaignThirdLink}
            />
            <MarketingCard
              img={data.campaignFourthIcon.file.url}
              alt={data.campaignFourthIcon.title}
              heading={data.campaignFourthTitle}
              description={data.campaignFourthSubtitle.campaignFourthSubtitle}
              to={data.campaignFourthLink}
            />
          </div>
        </div>
      </Section>
    );
  }
}
export default Marketing;
