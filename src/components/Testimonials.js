import React from 'react';
import styled from 'styled-components';

import CampaignItem from './CampaignItem';
import Button from './elements/Button';

const Section = styled.section`
  h1 {
    margin: 3rem 0 3rem 0;
  }
`;

const ButtonWrapper = styled.div`
  justify-content: center;
  padding: 3rem 0 3rem;
`;

const Testimonials = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title has-text-centered">TESTIMONIALS</h1>
      {/* <div className="columns">
        <CampaignItem />
        <CampaignItem />
        <CampaignItem />
      </div>
      <ButtonWrapper className="is-flex">
        <Button title="VIEW ALL ARTICLES" background="transparent" />
</ButtonWrapper> */}
    </div>
  </Section>
);

export default Testimonials;
