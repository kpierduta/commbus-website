import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 30rem;
  overflow: hidden;
  .background {
    padding: 6rem 4.5rem 6rem 4rem;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    transition: background-size 2s ease-in;
    :hover {
      background-size: inherit;
    }
  }
`;

const ProjectsCards = props => (
  <Section className={props.class} image={props.image}>
    <section className="section background">
      <div className="container">{props.children}</div>
    </section>
  </Section>
);

export default ProjectsCards;
