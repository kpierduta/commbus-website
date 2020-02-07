import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
  }
`;

const ProjectStyled = styled.div`
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
`;

class Projects extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <Section className="section">
        <div className="columns is-multiline">
          {project.map(item => (
            <ProjectStyled
              className={item.projectSizeIsHalf ? 'column is-6' : 'column is-4'}
              image={item.projectImage.file.url}
            >
              <section className="section background">
                <div className="container">
                  <img
                    className="image"
                    src={item.icon.file.url}
                    alt={item.icon.file.title}
                  />
                  <p className="has-text-white is-italic is-uppercase">
                    Sector:{item.category}
                  </p>
                  <h2 className="title is-2 has-text-white has-text-weight-medium">
                    {item.title}
                  </h2>
                  <p className="has-text-white content">
                    {item.shortDiscription.shortDiscription}
                  </p>
                  <Link
                    to={`/project/${item.slug}`}
                    className="button is-medium is-inverted has-text-black-bis"
                  >
                    VIEW PROJECTS
                  </Link>
                </div>
              </section>
            </ProjectStyled>
          ))}
        </div>
      </Section>
    );
  }
}

export default Projects;
