import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ProjectsCards from './ProjectCards';

const Section = styled.section`
  padding: 3rem 0rem;
  h1 {
    margin: 0rem 0 3rem 0;
  }
  .column {
    @media screen and (max-width: 768px) {
      padding: 0rem 0rem 0rem 0rem;
    }
  }
  .image {
    position: absolute;
    @media screen and (max-width: 768px) {
      float: right;
      position: relative;
    }
    right: 0rem;
    top: -4rem;
  }
  .logo {
    margin-bottom: 2rem;
  }
`;

class Projects extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <Section className="section">
        <div className="columns is-multiline">
          {project.map(item => (
            <ProjectsCards
              class={
                item.node.projectSizeIsHalf ? 'column is-6' : 'column is-4'
              }
              image={item.node.projectImage.file.url}
            >
              <img
                className="image"
                src={item.node.icon.file.url}
                alt={item.node.icon.file.title}
              />
              <p className="has-text-white is-italic is-uppercase">
                Sector:{item.node.category}
              </p>
              <h2 className="title is-2 has-text-white">{item.node.title}</h2>
              <p className="has-text-white content">
                {item.node.shortDiscription.shortDiscription}
              </p>
              <Link
                to={`/project/${item.node.slug}`}
                className="button is-medium is-inverted has-text-black-bis"
              >
                VIEW PROJECTS
              </Link>
            </ProjectsCards>
          ))}
        </div>
      </Section>
    );
  }
}

export default Projects;
