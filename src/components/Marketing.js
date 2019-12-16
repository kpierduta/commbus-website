import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';
import MarketingCard from './MarketingCard';

const Section = styled.section``;

const Marketing = ({ NavItems, title }) => (
  <Section className="section">
    <div className="container">
      <Heading title={title} />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {NavItems.map(item => (
              <MarketingCard
                url={item.url}
                heading={item.heading}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  </Section>
);

export default Marketing;
