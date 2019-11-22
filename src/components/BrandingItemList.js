import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  span {
    color: ${props => props.theme.secondryColor};
    font-family: ${props => props.theme.primaryFontFamily};
  }
  .text {
    margin: 0rem 0.5rem;
  }
`;

const BrandingItemList = () => (
  <Wrapper className="is-flex">
    <span className="icon">
      <i className="fas fa-check" />
    </span>
    <span className="text">Full wrap vehicle graphics</span>
  </Wrapper>
);

export default BrandingItemList;
