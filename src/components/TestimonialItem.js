import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .column {
    border: 2px solid #393938;
    margin: 1.5rem 1rem 0rem 1rem;
  }
  p {
    margin: -3rem 7rem 1rem 7rem;
    @media screen and (max-width: 768px) {
      margin: 0rem 0rem 0rem 0rem;
    }
  }
  .down-arrow {
    border-color: #393938 transparent;
    border-style: solid;
    border-width: 50px 0px 0px 50px;
    height: 0px;
    width: 0px;
  }
  .has-text-right {
    margin: 0rem 1rem 0rem 1rem;
    float: right;
  }
  .image.is-128x128 {
    height: 200px;
    width: 230px;
  }
`;

const Image = styled.figure`
  justify-content: center;
  display: inline-grid;
`;

const TestimonialItem = ({ Icon }) => (
  <Container>
    <diV className="column has-text-centered">
      <Image className="image is-128x128">
        <img src={Icon} alt="" />
      </Image>
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida
        dictum fusce ut placerat orci nulla pellentesque. Nunc id cursus metus
        aliquam eleifend mi in nulla posuere. Vitae congue eu consequat ac
        felis.”
      </p>
      <h2 className="has-text-weight-semibold">PERSON’S NAME</h2>
    </diV>
    <div className="down-arrow has-text-right"></div>
  </Container>
);

export default TestimonialItem;
