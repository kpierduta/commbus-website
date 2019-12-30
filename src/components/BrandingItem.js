import React from 'react';
import styled from 'styled-components';

import BrandingItemList from './BrandingItemList';

const Wrapper = styled.div`
  .card {
    height: 30rem;
  }
  h2 {
    color: ${props => props.theme.secondryColor};
    margin-bottom: 0.5rem;
  }
  .all-text {
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const BrandingItem = props => {
  return (
    <Wrapper className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.Image} alt={props.alt} />
          </figure>
        </div>
        <div className="card-content">
          <h2 className="has-text-weight-semibold all-text">{props.title}</h2>
          <BrandingItemList smalltext={props.first} />
          <BrandingItemList smalltext={props.second} />
          <BrandingItemList smalltext={props.third} />
        </div>
      </div>
    </Wrapper>
  );
};
export default BrandingItem;
