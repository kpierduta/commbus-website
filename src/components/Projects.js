import React, { useState } from 'react';
import styled from 'styled-components';

import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';

const Section = styled.section`
  padding: 3rem 0rem !important;
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
`;

const Projects = ({ project, reference, filter }) => {
  const [sector, changeSector] = useState('SECTOR');
  const [year, changeYear] = useState('DATE');

  return (
    <Section>
      {filter && (
        <ProjectFilter
          sector={sector}
          changeSector={changeSector}
          year={year}
          changeYear={changeYear}
        />
      )}
      <div className="columns is-multiline">
        {project &&
          project.map(({ node }) => {
            if (node.sector === sector || sector === 'SECTOR') {
              if (node.date === year || year === 'DATE') {
                if (year === '< 2016' && parseFloat(node.date) <= 2016) {
                  return <ProjectCard key={node.id} data={node} />;
                }
                return <ProjectCard key={node.id} data={node} />;
              }
            }
          })}
        {reference &&
          reference.map(items => <ProjectCard key={items.id} data={items} />)}
      </div>
    </Section>
  );
};

export default Projects;
