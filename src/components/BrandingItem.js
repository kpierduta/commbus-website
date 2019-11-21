import React from 'react';
import styled from 'styled-components';

import imageDummy from '../../static/images/projects/dummy.png';
import BrandingItemList from './BrandingItemList';

const Wrapper = styled.div`
  h2 {
    color: ${props => props.theme.secondryColor};
    margin-bottom: 0.5rem;
  }
`;

const BrandingItem = () => (
  <Wrapper className="card">
    <div className="card-image">
      <figure className="image">
        <img src={imageDummy} alt="Placeholder" />
      </figure>
    </div>
    <div className="card-content">
      <h2 className="has-text-weight-semibold">Space Ape Games</h2>
      <BrandingItemList />
      <BrandingItemList />
      <BrandingItemList />
    </div>
  </Wrapper>
);

export default BrandingItem;
