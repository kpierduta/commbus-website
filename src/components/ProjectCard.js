import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const CardStyled = styled.div`
  margin-top: 0rem;
  @media screen and (max-width: 768px) {
    height: auto;
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

  .hero {
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    transition: background-size 2s ease-in;
    background-position: center;
    transition: all 0.5s ease;
    /* :hover {
      transform: scale(1.05);
      @media screen and (max-width: 768px) {
        transform: none;
      }
    } */
  }

  .hero-body {
    padding: 6rem 4.5rem 6rem 4rem;
  }
`;

const ProjectCard = ({ data }) => (
  <CardStyled
    className={
      data.projectSizeIsHalf ? 'column is-6 is-flex' : 'column is-4 is-flex'
    }
    image={data.projectImage.file.url}
  >
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <img
            className="image"
            src={data.icon.file.url}
            alt={data.icon.file.title}
          />
          <p className="is-size-6 has-text-white is-italic is-uppercase">
            Sector:{data.category}
          </p>
          <h2 className="title is-3 has-text-weight-medium has-text-white">
            {data.title}
          </h2>
          <p className="has-text-white content">
            {data.shortDescription.shortDescription}
          </p>
          <Link
            to={`/case/${data.slug}`}
            className="button is-medium is-inverted has-text-black-bis"
          >
            VIEW CASE STUDY
          </Link>
        </div>
      </div>
    </div>
  </CardStyled>
);

export default ProjectCard;
