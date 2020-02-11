import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: ${props => (props.color ? props.color : props.theme.mainBrandColor)};
  letter-spacing: 0.2rem;
`;

const Heading = ({ title, size, color }) => (
  <Wrapper
    className={`title has-text-weight-light has-text-centered ${size ||
      'is-3'}`}
    color={color}
  >
    {title}
  </Wrapper>
);

export default Heading;
