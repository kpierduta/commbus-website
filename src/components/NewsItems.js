import React from 'react';

import styled from 'styled-components';

import { Link } from 'gatsby';

const Container = styled.div`
  min-height: 23.5rem;
  padding-right: 0rem;
  padding-top: 1rem;
  .background {
    width: 100%;
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

const NewsItems = ({ item }) => {
  return (
    <Container
      className="column is-half is-flex"
      bgImage={item.thumbnail.file.url}
    >
      <div className="background">
        <div className="columns">
          <div className="column is-4" />
          <div className="column">
            <section className="hero">
              <div className="hero-body">
                <div className="container has-text-centered-mobile">
                  <h1 className="title has-text-white is-3 has-text-weight-medium ">
                    {item.title}
                  </h1>
                  <Link
                    className="button is-medium is-link"
                    to={`/${item.slug}`}
                  >
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
