import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: ${props => (props.color ? props.color : props.theme.secondryColor)};
`;

const Heading = ({ title, color }) => (
  <Wrapper
    className="title is-3 has-text-weight-bold has-text-centered"
    color={color}>
    {title}
  </Wrapper>
);

export default Heading;
