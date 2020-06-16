import React from 'react';

import styled from 'styled-components';
import ImageModal from './ImageModal';

const Section = styled.div`
  .has-text-info {
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  width: 14rem;
  background: transparent;
  color: ${props => props.theme.mainBrandColor};
  border: 1px solid ${props => props.theme.mainBrandColor};
  :hover {
    color: ${props => props.theme.mainBrandColor} !important;
    border: 1px solid ${props => props.theme.mainBrandColor} !important;
  }
`;

const Shop = ({ item }) => {
  return (
    <Section className="column is-4">
      <div className="card">
        <div className="card-image">
          <ImageModal
            src={item.node.image.file.url}
            alt={item.node.image.title}
          />
        </div>
        <div className="card-content ">
          <div className="media-content has-text-centered">
            <p className="has-text-weight-semibold has-text-info">
              {item.node.title}
            </p>
            <a href="mailto:enquiries@deckerdence.com">
              <Button type="button" className="button is-large is-radiusless ">
                ENQUIRE
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Shop;
