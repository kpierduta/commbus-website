import React from 'react';
import styled from 'styled-components';

import CampaignItem from './CampaignItem';
import Button from './elements/Button';
import Heading from './elements/Heading';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundColor};
  h1 {
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
      <Heading title="our recent campaigns & insights" />
      <div className="columns">
        <CampaignItem />
        <CampaignItem />
        <CampaignItem />
      </div>
      <ButtonWrapper className="is-flex">
        <Button background="transparent">VIEW ALL ARTICLES</Button>
      </ButtonWrapper>
    </div>
  </Section>
);

export default Campaign;
