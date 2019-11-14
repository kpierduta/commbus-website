import React from 'react';
import styled from 'styled-components';

import TestimonialItem from './TestimonialItem';
import Heading from './elements/Heading';

const Section = styled.section`
  h1 {
    margin: 3rem 0 3rem 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => (
  <Section className="section">
    <div className="container">
      <Heading title="TESTIMONIALS" color="#000" />
      <div className="columns">
        <TestimonialItem />
        <TestimonialItem />
      </div>
    </div>
  </Section>
);

export default Testimonials;
