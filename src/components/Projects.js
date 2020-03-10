import React, { useState } from 'react';
import styled from 'styled-components';

import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';

const Section = styled.section`
  padding: 3rem 0rem !important;
  .coulmns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
`;

const Projects = ({ project, reference, filter }) => {
  const [sector, changeSector] = useState('SECTOR');

  return (
    <Section>
      {filter && <ProjectFilter sector={sector} changeSector={changeSector} />}
      <div className="columns is-multiline">
        {project &&
          project.map(({ node }) => {
            if (node.sector === sector || sector === 'SECTOR') {
              return <ProjectCard data={node} />;
            }
          })}
        {reference &&
          reference.map(items => <ProjectCard key={items.id} data={items} />)}
      </div>
    </Section>
  );
};

export default Projects;
