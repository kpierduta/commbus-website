import React from 'react';
import styled from 'styled-components';

const Heading = styled.p``;

const FooterHeading = ({ title }) => (
  <Heading className="is-size-6 has-text-weight-bold">{title}</Heading>
);

export default FooterHeading;
