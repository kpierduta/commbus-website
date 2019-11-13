import React from 'react';
import styled from 'styled-components';

import TestimonialItem from './TestimonialItem';

const Section = styled.section`
  h1 {
    margin: 3rem 0 3rem 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title has-text-centered">TESTIMONIALS</h1>
      <div className="columns">
        <TestimonialItem />
        <TestimonialItem />
      </div>
    </div>
  </Section>
);

export default Testimonials;
