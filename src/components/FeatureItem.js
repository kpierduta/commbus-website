import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  img {
    height: 5rem;
    margin-bottom: 1rem;
  }
`;

const FeatureItem = ({ img, alt, title, subtitle }) => (
  <Wrapper className="column has-text-centered all-text">
    <img src={img} alt={alt} />
    <h1 className="title is-6 has-text-weight-semibold has-text-white">
      {title}
    </h1>
    <p className="has-text-white">{subtitle}</p>
  </Wrapper>
);
export default FeatureItem;
