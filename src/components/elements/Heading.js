import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: ${props => (props.color ? props.color : props.theme.secondryColor)};
`;

const Heading = ({ title, size, color }) => (
  <Wrapper
    className={`title has-text-weight-bold has-text-centered ${size || 'is-3'}`}
    color={color}>
    {title}
  </Wrapper>
);

export default Heading;
