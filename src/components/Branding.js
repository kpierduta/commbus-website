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
  .buttons {
    justify-content: center;
  }
`;

const Branding = ({ data }) => {
  return (
    <Section className="section">
      <div className="container">
        <Heading title={data.sectionTitle} />
        <Heading title={data.sectionSubtitle} size="is-6" />
        <div className="columns is-multiline">
          {data.brandingShowCase.map(item => (
            <BrandingItem item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Branding;
