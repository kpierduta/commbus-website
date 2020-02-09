import React from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

const Section = styled.section`
  padding: 3rem 0rem;
`;

const Projects = ({ project, reference }) => (
  <Section className="section">
    <div className="columns is-multiline">
      {project && project.map(({ node }) => <ProjectCard data={node} />)}
      {reference && reference.map(items => <ProjectCard data={items} />)}
    </div>
  </Section>
);

export default Projects;
