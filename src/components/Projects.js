import React from 'react';
import styled from 'styled-components';
import ProjectsCards from './ProjectCards';

const Section = styled.section`
  .button.is-medium {
    margin-top: 11rem;
  }
`;

const Projects = () => (
  <Section>
    <div className="columns is-multiline">
      <ProjectsCards
        class="column is-6"
        image="/images/projects/featured-staffordshire-university.png">
        <p className="has-text-white is-italic is-uppercase">
          Sector: eduction
        </p>
        <h2 className="title is-2 has-text-white">FEATURED</h2>
        <a className="button is-medium is-inverted has-text-black-bis">
          VIEW PROJECTS
        </a>
      </ProjectsCards>
      <ProjectsCards
        class="column is-6"
        image="/images/projects/space-ape-featured-v2.png">
        <p className="has-text-white is-italic has-text-warning">
          sector: Entertainment
        </p>
        <h2 className="title is-2 has-text-white">new product launch</h2>
        <a className="button is-medium is-inverted has-text-black-bis">
          VIEW PROJECTS
        </a>
      </ProjectsCards>
      <ProjectsCards
        class="column is-4"
        image="/images/projects/pannini-featured-2.png">
        <p className="has-text-white is-italic has-text-warning">
          sector: retail
        </p>
        <h2 className="title is-2 has-text-white">product launch</h2>
        <a className="button is-medium is-inverted has-text-black-bis">
          VIEW PROJECTS
        </a>
      </ProjectsCards>
      <ProjectsCards
        class="column is-4"
        image="/images/projects/gemalto-featured.png">
        <p className="has-text-white is-italic">sector: commercial</p>
        <h2 className="title is-2 has-text-white">awareness campaign</h2>
        <a className="button is-medium is-inverted has-text-black-bis">
          VIEW PROJECTS
        </a>
      </ProjectsCards>
      <ProjectsCards
        class="column is-4"
        image="http://staging.commbus.com/wp-content/uploads/2019/04/breast-cancer-care-featured.png">
        <p className="has-text-white is-italic">sector: charity</p>
        <h2 className="title is-2 has-text-white">awareness campaign</h2>
        <a className="button is-medium is-inverted has-text-black-bis">
          VIEW PROJECTS
        </a>
      </ProjectsCards>
    </div>
  </Section>
);

export default Projects;
