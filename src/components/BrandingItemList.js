import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  span {
    color: ${props => props.theme.secondryColor} !important;
    font-family: ${props => props.theme.primaryFontFamily};
  }
  .text {
    margin: 0rem 0.3rem;
  }
`;

const BrandingItemList = ({ smalltext }) => {
  return (
    <Wrapper className="is-flex">
      <span className="icon">
        <i className="fas fa-check" />
      </span>
      <span className="subtitle is-6 text has-text-weight-semibold">
        {smalltext}
      </span>
    </Wrapper>
  );
};
export default BrandingItemList;
