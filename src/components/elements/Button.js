import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  width: ${props => (props.width ? props.width : '')};
  color: ${props => props.theme.secLightShades};
  border: 1px solid ${props => props.theme.secLightShades};
  :hover {
    color: ${props => props.theme.secLightShades};
    border: 1px solid ${props => props.theme.secLightShades};
  }
  background-color: ${props => props.background};
`;

const Button = ({ title, width, background, ...otherProps }) => (
  <Wrapper
    className="button is-radiusless is-large"
    type="button"
    width={width}
    background={background}
    {...otherProps}>
    {title}
  </Wrapper>
);

export default Button;
