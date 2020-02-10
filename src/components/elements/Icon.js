import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const IconContainer = styled.span`
  margin: 0rem 0.5rem !important;
`;

const Icon = ({ icon, link }) => (
  <Link to={link}>
    <IconContainer className="icon has-text-dark is-size-5">
      {icon}
    </IconContainer>
  </Link>
);

export default Icon;
