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

const Shop = ({ avatar, title, alt }) => {
  return (
    <Section className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={avatar} alt={alt} />
          </figure>
        </div>
        <div className="card-content ">
          <div className="media-content">
            <p className="has-text-centered has-text-weight-semibold text">
              {title}
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
