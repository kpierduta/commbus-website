import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';
import BrandingItem from './BrandingItem';
import Button from './elements/Button';

const Section = styled.section`
  background: #eef3f6;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0rem 4rem 0rem;
  justify-content: center;
  display: grid;
`;

const Branding = props => (
  <Section className="section">
    <div className="container">
      <Heading title={props.title} />
      <Heading title={props.subtitle} size="is-6" />
      <div className="columns is-multiline">
        <BrandingItem
          Image="/images/brandingdesign/space-ape.png"
          title="Space Ape Games"
        />
        <BrandingItem
          Image="/images/brandingdesign/producta.png"
          title="Scholar"
        />
        <BrandingItem
          Image="/images/brandingdesign/heinz2x.png"
          title="Heinz 50 Year Anniversary"
        />
        <BrandingItem
          Image="/images/brandingdesign/producta.png"
          title="Space Ape Games"
        />
        <BrandingItem
          Image="/images/brandingdesign/producta.png"
          title="Scholar"
        />
        <BrandingItem
          Image="/images/brandingdesign/heinz.png"
          title="Heinz 50 Year Anniversary"
        />
      </div>
      <ButtonContainer className="colums">
        <div className="column">
          <div className="buttons">
            <Button
              width="14rem"
              background="transparent"
              link={props.fistlink}
            >
              {props.fistbutton}
            </Button>
            <Button
              width="14rem"
              background="transparent"
              link={props.secondlink}
            >
              {props.secondbutton}
            </Button>
          </div>
        </div>
      </ButtonContainer>
    </div>
  </Section>
);

export default Branding;
