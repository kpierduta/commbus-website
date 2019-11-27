import React from 'react';
import styled from 'styled-components';

const Heading = styled.p``;

const FooterHeading = ({ title }) => (
  <Heading className="is-size-6 has-text-weight-bold is-spaced">
    {title}
  </Heading>
);

export default FooterHeading;
