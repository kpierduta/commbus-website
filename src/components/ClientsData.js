import React from 'react';
import styled from 'styled-components';

import Clients from './Clients';

const Section = styled.div`
  background-color: #f7f7f7;
`;

const ClientsData = () => (
  <Section className="section">
    <div className="container">
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
        <Clients
          avatar="https://bulma.io/images/placeholders/128x128.png"
          title="People United"
          subtitle="6 Week Tour  1 Bus for the North & 1 Bus for the South - Pre General Election"
          text="Internally:"
          para="Visual graphics provided information for members on their campaign objectives. Information seatings areas where people could come on board and find out more."
        />
        <Clients
          avatar="https://bulma.io/images/placeholders/128x128.png"
          title=""
          subtitle=""
          text="Externally:"
          para="Seeing Double? 2 identical buses fully branded to tour the UK. 1 bus headed south and the 2nd headed North. On a couple of occasions on the tour both buses joined together (and the TUC bus went along too)."
        />
      </div>
    </div>
  </Section>
);
export default ClientsData;
