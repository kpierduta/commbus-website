import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .background {
    padding-bottom: 4rem;
    background-image: url(${props => props.image});
    background-position: left top;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const ProjectsCards = props => (
  <Section className={props.class} image={props.image}>
    <Section className="section background">
      <div className="container">{props.children}</div>
    </Section>
  </Section>
);

export default ProjectsCards;
