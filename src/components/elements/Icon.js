import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.span`
  margin: 0rem 1rem !important;
`;

const Icon = ({ icon }) => (
  <IconContainer className="icon has-text-dark is-size-3">{icon}</IconContainer>
);

export default Icon;
