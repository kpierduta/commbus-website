import React from 'react';

import styled from 'styled-components';

const Section = styled.div``;

const Shop = ({ avatar, title, subtitle }) => {
  return (
    <Section className="column is-half">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={avatar} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4 has-text-centered">{title}</p>
          <p className="subtitle is-6">{subtitle}</p>
        </div>
      </div>
    </Section>
  );
};

export default Shop;
