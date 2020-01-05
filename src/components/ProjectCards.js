import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: 2rem;
  height: 25rem;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: auto;
  }
  .background {
    padding: 6rem 4.5rem 6rem 4rem;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    transition: background-size 2s ease-in;
    background-position: center;
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.05);
      @media screen and (max-width: 768px) {
        transform: none;
      }
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
