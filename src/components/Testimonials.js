import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import TestimonialItem from './TestimonialItem';
import Heading from './elements/Heading';

const Section = styled.section`
  h1 {
    margin: 3rem 0 3rem 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = ({ data }) => (
  <Section className="section">
    <div className="container">
      <Heading title="TESTIMONIALS" color="#000" />
      <div className="columns is-multiline">
        {data.map(items => (
          <TestimonialItem item={items} />
        ))}
      </div>
    </div>
  </Section>
);

export default Testimonials;
