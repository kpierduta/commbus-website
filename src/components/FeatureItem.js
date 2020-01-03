import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem 2rem 5rem 2rem;
  @media only screen and (max-width: 1095px) and (min-width: 769px) {
    padding: 3rem 2rem 0rem;
  }
  img {
    height: 5rem;
    margin-bottom: 1rem;
  }
  p {
    line-height: 18px;
  }
  .all-text {
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const FeatureItem = ({ img, alt, title, subtitle }) => (
  <Wrapper className="column has-text-centered all-text">
    <img src={img} alt={alt} />
    <h1 className="title is-6 has-text-weight-semibold has-text-white all-text">
      {title}
    </h1>
    <p className="has-text-white">{subtitle}</p>
  </Wrapper>
);
export default FeatureItem;
