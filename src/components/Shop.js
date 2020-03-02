import React from 'react';

import styled from 'styled-components';
import ImageModal from './ImageModal';
import Button from './elements/Button';

const Section = styled.div`
  .has-text-info {
    margin-bottom: 1rem;
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
            <Button width="14rem" background="transparent">
              ENQUIRE
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Shop;
