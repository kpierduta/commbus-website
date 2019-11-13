import React from 'react';
import styled from 'styled-components';

import dummyIcon from '../../static/images/brands/itv.jpg';

const Container = styled.div`
  border: 1px solid #000;
  margin: 0rem 1rem;
  p {
    margin: -3rem 7rem 1rem 7rem;
  }
`;

const Image = styled.figure`
  justify-content: center;
  display: inline-grid;
`;

const TestimonialItem = () => (
  <Container className="column has-text-centered">
    <Image className="image is-128x128">
      <img src={dummyIcon} alt="" />
    </Image>
    <p>
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida
      dictum fusce ut placerat orci nulla pellentesque. Nunc id cursus metus
      aliquam eleifend mi in nulla posuere. Vitae congue eu consequat ac felis.”
    </p>
    <h2 className="has-text-weight-semibold">PERSON’S NAME</h2>
  </Container>
);

export default TestimonialItem;
