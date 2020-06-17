import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.span`
  margin: 0rem 0.5rem !important;
`;

const Icon = ({ icon, link }) => (
  <a href={link}>
    <IconContainer className="icon has-text-dark is-size-5">
      {icon}
    </IconContainer>
  </a>
);

export default Icon;
