import React from 'react';
import styled from 'styled-components';

import imageDummy from '../../static/images/projects/dummy.png';

const Container = styled.div`
  p {
    color: ${props => props.theme.secondryColor} !important;
  }
`;

const Button = styled.button`
  color: #fff;
  background: ${props => props.theme.secondryColor};
  :hover {
    color: #fff;
  }
`;

const CampaignItem = () => (
  <Container className="column">
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={imageDummy} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <p className="has-text-weight-semibold">
          The 7 principles of engagement marketing
        </p>
      </div>
      <Button
        className="button is-large is-raduisless is-fullwidth"
        type="button">
        READ ARTICLE
      </Button>
    </div>
  </Container>
);

export default CampaignItem;
