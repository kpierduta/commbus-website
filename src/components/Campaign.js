import React from 'react';
import styled from 'styled-components';

import CampaignItem from './CampaignItem';
import Button from './elements/Button';

const Section = styled.section`
  background-color: #eef3f6;
  h1 {
    color: #487c92;
    margin: 3rem 0 3rem 0;
  }
`;

const ButtonWrapper = styled.div`
  justify-content: center;
  padding: 3rem 0 3rem;
`;

const Campaign = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title has-text-centered">
        our recentcampaigns & insights
      </h1>
      <div className="columns">
        <CampaignItem />
        <CampaignItem />
        <CampaignItem />
      </div>
      <ButtonWrapper className="is-flex">
        <Button title="VIEW ALL ARTICLES" background="transparent" />
      </ButtonWrapper>
    </div>
  </Section>
);

export default Campaign;
