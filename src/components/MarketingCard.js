import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  .card {
    min-height: 25rem;
    border: 2px solid ${props => props.theme.mainBrandColor};
    box-shadow: none;
    @media screen and (max-width: 768px) {
      height: auto;
    }
  }
  .content {
    min-height: 10rem;
  }
  .title {
    margin-top: 1.5rem;
  }
`;

const LinkStyled = styled(Link)`
  font-family: ${props => props.theme.secondaryFontFamily};
  margin-top: 1.5rem;
`;

const MarketingCard = ({ img, alt, heading, description, to }) => (
  <Section className="column is-6">
    <div className="card">
      <div className="card-content">
        <div className="columns">
          <div className="column is-4">
            <figure className="image">
              <img src={img} alt={alt} />
            </figure>
          </div>
          <div className="column">
            <h2 className="title is-4 has-text-info has-text-weight-medium has-text-centered-mobile">
              {heading}
            </h2>
          </div>
        </div>
        <div className="content has-text-centered">
          <p className="has-text-info">{description}</p>
        </div>
        <div className="has-text-centered">
          <LinkStyled
            to={to}
            className="title is-4 has-text-info has-text-weight-normal"
          >
            FIND OUT MORE
          </LinkStyled>
        </div>
      </div>
    </div>
  </Section>
);

export default MarketingCard;
