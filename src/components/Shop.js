import React from 'react';

import styled from 'styled-components';

import Button from './elements/Button';

const Section = styled.div`
  .text {
    color: ${props => props.theme.secondryColor} !important;
  }
`;
const ButtonContainer = styled.div`
  justify-content: center;
  display: grid;
`;

const Shop = ({ item }) => {
  return (
    <Section className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={item.node.image.file.url} alt={item.node.image.title} />
          </figure>
        </div>
        <div className="card-content ">
          <div className="media-content">
            <p className="has-text-centered has-text-weight-semibold text">
              {item.node.title}
            </p>
            <ButtonContainer className="colums">
              <div className="column">
                <Button width="14rem" background="transparent">
                  ENQUIRE
                </Button>
              </div>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Shop;
