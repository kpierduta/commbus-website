import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  overflow: hidden;
  .background {
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    transition: all 0.5s ease;
    :hover {
      // transform: scale(1.2);
      overflow: hidden;
    }
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
