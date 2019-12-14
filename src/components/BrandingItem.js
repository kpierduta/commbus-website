import React from 'react';
import styled from 'styled-components';

import BrandingItemList from './BrandingItemList';

const Wrapper = styled.div`
  h2 {
    color: ${props => props.theme.secondryColor};
    margin-bottom: 0.5rem;
  }
  .all-text {
    font-family: ${props => props.theme.primaryFontFamily};
  }
   {
  }
`;

const BrandingItem = ({ Image, title }) => {
  return (
    <Wrapper className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={Image} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <h2 className="has-text-weight-semibold all-text">{title}</h2>
          <BrandingItemList smalltext="Promotional open top bus" />
          <BrandingItemList smalltext="Full external bus wrap" />
          <BrandingItemList smalltext="Project manager on tour with the client team" />
        </div>
      </div>
    </Wrapper>
  );
};
export default BrandingItem;
