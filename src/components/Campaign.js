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
  xpadding: 3rem 0 3rem;
`;

const Campaign = () => (
  <Section className="section">
    <div className="container">
      <Heading title="our recent campaigns & insights" />
      <div className="columns">
        <CampaignItem image="/images/campain/blog-image-1@2x.jpg" />
        <CampaignItem image="/images/campain/blog-image-2@3x.jpg" />
        <CampaignItem image="/images/campain/blog-image-3@2x.jpg" />
      </div>
      <ButtonWrapper className="is-flex">
        <Button background="transparent" to="/news">
          VIEW ALL ARTICLES
        </Button>
      </ButtonWrapper>
    </div>
  </Section>
);

export default Campaign;
