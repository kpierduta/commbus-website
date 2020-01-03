import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1.7rem 0rem;
  .border-box {
    padding-top: 1rem;
    height: 35rem;
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

const TestimonialItem = props => (
  <Container className="column has-text-centered">
    <diV className="border-box">
      <Image className="image is-128x128">
        <img src={props.Icon} alt={props.alt} />
      </Image>
      <p>{props.description}</p>
      <h2 className="has-text-weight-semibold">{props.name}</h2>
    </diV>
    <div className="down-arrow has-text-right"></div>
  </Container>
);

export default TestimonialItem;
