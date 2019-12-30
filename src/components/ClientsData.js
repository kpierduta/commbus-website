import React from 'react';
import styled from 'styled-components';

import Clients from './Clients';
import Heading from './elements/Heading';

const Section = styled.div`
  background-color: #f7f7f7;
`;

const ClientsData = props => (
  <Section className="section">
    <div className="container">
      <Heading title={props.title} />
      <Heading title={props.subtitle} size="is-4" />
      <div className="columns is-multiline">
        <Clients
          avatar="https://bulma.io/images/placeholders/128x128.png"
          title="Breast Cancer Care"
          subtitle="6 Week Tour in Scotland covering Breast Cancer Awareness Month"
          text="Internally:"
          para="Designed as an informal space, the lower deck was a relaxed space with informative graphics and interactive tech. The upper deck, a multi-functional space where talks and presentations were delivered."
        />
        <Clients
          avatar="https://bulma.io/images/placeholders/128x128.png"
          title=""
          subtitle=""
          text="Externally:"
          para="A bright and striking external bus wrap that couldn't fail to be missed. Using specialist vinyl over the windows on both decks allowed the natural light throughout the bus."
        />
      </div>
    </div>
  </Section>
);
export default ClientsData;
