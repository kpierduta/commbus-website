import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  span {
    color: ${props => props.theme.secondryColor};
  }
`;

const BrandingItemList = () => (
  <Wrapper className="is-flex">
    <span className="icon">
      <i className="fas fa-check" />
    </span>
    <span>Full wrap vehicle graphics</span>
  </Wrapper>
);

export default BrandingItemList;
