import React from 'react';
import styled from 'styled-components';

import BrandingItemList from './BrandingItemList';

const Wrapper = styled.div`
  .card {
    height: 31.5rem;
    @media screen and (max-width: 768px) {
      height: auto;
    }
  }
  .all-text {
    margin-bottom: 0.5rem;
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
          <p className="has-text-weight-semibold all-text has-text-info">
            {props.title}
          </p>
          <BrandingItemList smalltext={props.first} />
          <BrandingItemList smalltext={props.second} />
          <BrandingItemList smalltext={props.third} />
        </div>
      </div>
    </Wrapper>
  );
};
export default BrandingItem;
