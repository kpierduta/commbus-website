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

class ProjectsRefernce extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <Section className="section">
        <div className="columns is-multiline">
          {project.map(item => (
            <ProjectsCards
              class={item.projectSizeIsHalf ? 'column is-6' : 'column is-4'}
              image={item.projectImage.file.url}
            >
              <img className="image" src={item.icon.file.url} />
              <p className="has-text-white is-italic is-uppercase">
                Sector:{item.category}
              </p>
              <h2 className="title is-2 has-text-white">{item.title}</h2>
              <p className="has-text-white content">
                {item.shortDiscription.shortDiscription}
              </p>
              <Link
                to="/projectblog"
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

export default ProjectsRefernce;
