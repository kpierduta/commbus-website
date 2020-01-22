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

const BrandingItem = ({ item }) => {
  return (
    <Wrapper className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={item.image.file.url} alt={item.image.title} />
          </figure>
        </div>
        <div className="card-content">
          <p className="has-text-weight-semibold all-text has-text-info">
            {item.title}
          </p>
          <BrandingItemList smalltext={item.firstPoint} />
          <BrandingItemList smalltext={item.secondPoint} />
          <BrandingItemList smalltext={item.thirdPoint} />
        </div>
      </div>
    </Wrapper>
  );
};
export default BrandingItem;
