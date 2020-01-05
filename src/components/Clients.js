import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 1rem;
  .background {
    background-color: white;
  }
  .heading {
    margin-top: 1.5rem;
    color: #3c3c3b !important;
  }
  .text {
    margin-bottom: 2.75rem !important;
  }
`;

const Clients = ({ title, subtitle, text, para, avatar, alt }) => (
  <Section className="column is-half">
    <div className="columns background">
      <div className="column test">
        <figure className="image is-square">
          <img src={avatar} alt={alt} />
        </figure>
      </div>
      <div className="column">
        <h1 className="title is-6 heading has-text-weight-medium">{title}</h1>
        <p className="subtitle is-6 text">{subtitle}</p>
        <h1 className="title is-6 has-text-weight-medium heading">{text}</h1>
        <p className="subtitle is-6">{para}</p>
      </div>
    </div>
  </Section>
);

export default Clients;
