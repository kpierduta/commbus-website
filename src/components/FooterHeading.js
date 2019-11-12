import React from 'react';
import styled from 'styled-components';

const Heading = styled.p`
  margin-bottom: 0.5rem;
`;

const FooterHeading = ({ title }) => (
  <Heading className="is-size-4 has-text-weight-bold">{title}</Heading>
);

export default FooterHeading;
