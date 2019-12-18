import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .text {
    margin-top: 2.75rem !important;
  }

  .title {
    color: ${props => props.theme.secondryColor} !important;
  }
`;

const Clients = ({ title, subtitle, text, para, avatar }) => (
  <Section className="column is-half">
    <div className="columns">
      <div className="column">
        <figure className="image is-square">
          <img src={avatar} alt="" />
        </figure>
      </div>
      <div className="column">
        <h1 className="title is-3">{title}</h1>
        <p className="subtitle is-6">{subtitle}</p>
        <h1 className="title is-6 text">{text}</h1>
        <p className="subtitle is-6">{para}</p>
      </div>
    </div>
  </Section>
);

export default Clients;
