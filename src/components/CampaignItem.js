import React from 'react';
import styled from 'styled-components';

import Button from './elements/Button';

const Container = styled.div`
  .card-content {
    min-height: 8rem;
  }
`;

const CampaignItem = props => (
  <Container className="column is-4">
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={props.image} alt={props.alt} />
        </figure>
      </div>
      <div className="card-content">
        <p className="has-text-weight-semibold has-text-centered has-text-info">
          {props.title}
        </p>
      </div>
      <Button fullWidth color="#fff" to={props.to}>
        READ ARTICLE
      </Button>
    </div>
  </Container>
);

export default CampaignItem;
