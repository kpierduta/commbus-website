import React from 'react';

import styled from 'styled-components';

import Button from './elements/Button';

const Section = styled.div``;

const Shop = ({ avatar, title }) => {
  return (
    <Section className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={avatar} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4 has-text-centered">{title}</p>
            <Button width="10rem" background="transparent">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Shop;
