import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ProjectsCards from './ProjectCards';

const Section = styled.section`
  padding: 3rem 0rem;
  h1 {
    margin: 0rem 0 3rem 0;
  }
  .image {
    position: absolute;
    right: 0rem;
    top: -4rem;
  }
  .logo {
    margin-bottom: 2rem;
  }
`;

const Projects = () => (
  <Section className="section">
    <div className="columns is-multiline">
      <ProjectsCards
        class="column is-6"
        image="/images/projects/featured-staffordshire-university.png"
      >
        <img
          className="image"
          src="/images/projects/stafford-uni-logo@2x.png"
        />
        <p className="has-text-white is-italic is-uppercase">
          Sector: eduction
        </p>
        <h2 className="title is-2 has-text-white">FEATURED</h2>
        <p className="has-text-white content">
          Commbus works with Staffordshire University for a second consecutive
          year and increases user interaction with custom designed interior.
        </p>
        <Link
          to="/projectblog"
          className="button is-medium is-inverted has-text-black-bis"
        >
          VIEW PROJECTS
        </Link>
      </ProjectsCards>
      <ProjectsCards
        class="column is-6"
        image="/images/projects/space-ape-featured-v2.png"
      >
        <img className="image" src="/images/projects/space-ape-logo@2x.png" />
        <p className="has-text-white is-italic has-text-warning">
          sector: Entertainment
        </p>
        <h2 className="title is-2 has-text-white">new product launch</h2>
        <p className="has-text-white content">
          Commbus works with Staffordshire University for a second consecutive
          year and increases user interaction with custom designed interior.
        </p>
        <Link
          to="/projectblog"
          className="button is-medium is-inverted has-text-black-bis"
        >
          VIEW PROJECTS
        </Link>
      </ProjectsCards>
      <ProjectsCards
        class="column is-4"
        image="/images/projects/pannini-featured-2.png"
      >
        <img className="logo" src="/images/projects/panini-logo@2x.png" />
        <p className="has-text-white is-italic has-text-warning">
          sector: retail
        </p>
        <h2 className="title is-2 has-text-white">product launch</h2>
        <p className="has-text-white content">
          Commbus helps Panini to promote their sticker collection with an
          eye-catching fully wrapped bus.
        </p>
        <Link
          to="/projectblog"
          className="button is-medium is-inverted has-text-black-bis"
        >
          VIEW PROJECTS
        </Link>
      </ProjectsCards>
      <ProjectsCards
        class="column is-4"
        image="/images/projects/gemalto-featured.png"
      >
        <img className="logo" src="/images/projects/gemalto-logo@2x.png" />
        <p className="has-text-white is-italic">sector: commercial</p>
        <h2 className="title is-2 has-text-white">awareness campaign</h2>
        <p className="has-text-white content">
          Commbus helps Panini to promote their sticker collection with an
          eye-catching fully wrapped bus.
        </p>
        <Link
          to="/projectblog"
          className="button is-medium is-inverted has-text-black-bis"
        >
          VIEW PROJECTS
        </Link>
      </ProjectsCards>
      <ProjectsCards
        class="column is-4"
        image="/images/projects/breast-cancer-care-featured.png"
      >
        <img
          className="logo"
          src="/images/projects/breast-cancer-care@2x.png"
        />
        <p className="has-text-white is-italic">sector: charity</p>
        <h2 className="title is-2 has-text-white">awareness campaign</h2>
        <p className="has-text-white content">
          Commbus work with Breast Cancer Care to raise money across the
          country.
        </p>
        <Link
          to="/projectblog"
          className="button is-medium is-inverted has-text-black-bis"
        >
          VIEW PROJECTS
        </Link>
      </ProjectsCards>
    </div>
  </Section>
);

export default Projects;
