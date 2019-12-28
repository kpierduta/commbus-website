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
          <section className="section">
            <div className="container">
              <div className="columns is-multiline">
                <MarketingCard
                  img={data.campaignFirstIcon.file.url}
                  alt={data.campaignFirstIcon.title}
                  heading={data.campaignFirstTitle}
                  description={data.campaigFirstSubtitle.campaigFirstSubtitle}
                />
                <MarketingCard
                  img={data.campaigSecondIcon.file.url}
                  alt={data.campaigSecondIcon.title}
                  heading={data.campaigSecondTitle}
                  description={data.campaigSecondSubtitle.campaigSecondSubtitle}
                />
                <MarketingCard
                  img={data.campaigThirdIcon.file.url}
                  alt={data.campaigThirdIcon.title}
                  heading={data.campaigThirdTitle}
                  description={data.campaigThirdSubtitle.campaigThirdSubtitle}
                />
                <MarketingCard
                  img={data.campaigFourthIcon.file.url}
                  alt={data.campaigFourthIcon.title}
                  heading={data.campaigFourthTitle}
                  description={
                    data.campaignFourthSubtitle.campaignFourthSubtitle
                  }
                />
              </div>
            </div>
          </section>
        </div>
      </Section>
    );
  }
}
export default Marketing;
