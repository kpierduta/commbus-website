import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #eef3f6;
`;

const Clients = ({ title, Subtitle, text, para }) => (
  <Section className="column is-half">
    <div className="columns">
      <div className="column">
        <figure className="image is-square">
          <img src="https://bulma.io/images/placeholders/128x128.png" alt="" />
        </figure>
      </div>
      <div className="column">
        <h1 className="title is-5">{title}</h1>
        <p className="subtitle is-6">{Subtitle}</p>

        <h1 className="title is-6">{text}</h1>
        <p className="subtitle is-6">{para}</p>
      </div>
    </div>
  </Section>
);

export default Clients;
