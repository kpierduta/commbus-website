import React from 'react';
import styled from 'styled-components';

import Button from './elements/Button';

const Container = styled.div`
  p {
    color: ${props => props.theme.secondryColor} !important;
    font-family: ${props => props.theme.primaryFontFamily} !important;
  }
`;

const CampaignItem = ({ image }) => (
  <Container className="column">
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={image} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <p className="has-text-weight-semibold has-text-centered">
          The 7 principles of engagement marketing
        </p>
      </div>
      <Button fullWidth color="#fff">
        READ ARTICLE
      </Button>
    </div>
  </Container>
);

export default CampaignItem;
