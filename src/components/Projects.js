import React from 'react';
import styled from 'styled-components';
import ProjectsCards from './ProjectCards';
import Button from './elements/Button';

const Section = styled.section`
  .button.is-medium {
    margin-top: 11rem;
  }
  h1 {
    color: #487c92;
    margin: 6rem 0 3rem 0;
  }
`;

const ButtonContainer = styled.div`
  margin: 1rem 0rem 6rem 0rem;
  justify-content: center;
  display: grid;
`;

const Projects = () => (
  <Section>
    <h1 className="title has-text-centered">
      OUR RECENT PRODUCT LAUNCH CAMPAIGNS
    </h1>
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
        image="/images/projects/breast-cancer-care-featured.png">
        <p className="has-text-white is-italic">sector: charity</p>
        <h2 className="title is-2 has-text-white">awareness campaign</h2>
        <a className="button is-medium is-inverted has-text-black-bis">
          VIEW PROJECTS
        </a>
      </ProjectsCards>
    </div>
    <ButtonContainer className="colums">
      <div className="column">
        <div className="buttons">
          <Button title="SEE PROJECTS" width="14rem" />
          <Button title="CONTACT US" width="14rem" />
        </div>
      </div>
    </ButtonContainer>
  </Section>
);

export default Projects;
