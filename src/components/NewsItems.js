import React from 'react';

import styled from 'styled-components';

import { Link } from 'gatsby';

const Container = styled.div`
  padding-right: 0rem;
  padding-top: 2rem;
  .background {
    min-height: 22rem;
    background-image: url(${props => props.bgImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .button.is-medium {
    margin-top: 2rem;
    :hover {
      background-color: ${props => props.theme.darkShades};
    }
  }
`;

const NewsItems = ({ title, bgImage, link }) => {
  return (
    <Container className="column is-half" bgImage={bgImage}>
      <div className="background">
        <div className="columns">
          <div className="column is-4" />
          <div className="column">
            <section className="hero">
              <div className="hero-body">
                <div className="container has-text-centered-mobile">
                  <h1 className="title has-text-white is-3 has-text-weight-medium ">
                    {title}
                  </h1>
                  <Link className="button is-medium is-link" to={link}>
                    READ MORE
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsItems;
