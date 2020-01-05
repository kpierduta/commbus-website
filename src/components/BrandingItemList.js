import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 0.5rem;
  .icon {
    margin-right: 0.3rem;
  }
`;

const BrandingItemList = ({ smalltext }) => {
  return (
    <Wrapper className="is-flex">
      <p className="icon">
        <i className="fas fa-check" />
      </p>
      <p className="subtitle is-6 has-text-info">{smalltext}</p>
    </Wrapper>
  );
};
export default BrandingItemList;
