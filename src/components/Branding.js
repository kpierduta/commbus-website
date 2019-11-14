import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';
import BrandingItem from './BrandingItem';
import Button from './elements/Button';

const Section = styled.section`
  background: #eef3f6;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0rem 6rem 0rem;
  justify-content: center;
  display: grid;
`;

const Branding = () => (
  <Section className="section">
    <div className="container">
      <Heading title="Internal & external branding" />
      <Heading title="Client Examples" size="is-6" />
      <div className="columns">
        <div className="column">
          <BrandingItem />
        </div>
        <div className="column">
          <BrandingItem />
        </div>
        <div className="column">
          <BrandingItem />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <BrandingItem />
        </div>
        <div className="column">
          <BrandingItem />
        </div>
        <div className="column">
          <BrandingItem />
        </div>
      </div>

      <ButtonContainer className="colums">
        <div className="column">
          <div className="buttons">
            <Button width="14rem" background="transparent">
              Internal branding
            </Button>
            <Button width="14rem" background="transparent">
              External branding
            </Button>
          </div>
        </div>
      </ButtonContainer>
    </div>
  </Section>
);

export default Branding;
