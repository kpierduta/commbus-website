import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  width: ${props => (props.width ? props.width : '')};
  color: ${props => (props.color ? props.color : props.theme.secondryColor)};
  border: 1px solid
    ${props => (props.border ? props.border : props.theme.secondryColor)};
  :hover {
    color: ${props => (props.color ? props.color : props.theme.secondryColor)};
    border: 1px solid
      ${props => (props.border ? props.border : props.theme.secondryColor)};
  }
  background-color: ${props =>
    props.background ? props.background : props.theme.secondryColor};
`;

const Button = ({ className, children, fullWidth, ...otherProps }) => (
  <Wrapper
    className={`button is-radiusless is-large ${
      fullWidth ? 'is-fullwidth' : ''
    }`}
    type="button"
    {...otherProps}>
    {children}
  </Wrapper>
);

export default Button;
