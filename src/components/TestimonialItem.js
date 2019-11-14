import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #000;
  margin: 1.5rem 1rem;
  p {
    margin: -3rem 7rem 1rem 7rem;
  }
  .image.is-128x128 {
    height: 200px;
    width: 230px;
  }
  .triangle-topright {
    width: 0;
    height: 0;
    border-top: 100px solid red;
    border-left: 100px solid transparent;
  }
`;

const Image = styled.figure`
  justify-content: center;
  display: inline-grid;
`;

const TestimonialItem = ({ Icon }) => (
  <Container className="column has-text-centered">
    <Image className="image is-128x128">
      <img src={Icon} alt="" />
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
