import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  .card {
    height: 20rem;
    border: 2px solid ${props => props.theme.lightShades};
    box-shadow: none;
  }
  .section {
    padding: 0rem 0.5rem;
  }
  .card-content {
    padding: 1.25rem;
  }
  h2 {
    margin-top: 2.5rem;
  }
`;

const LinkStyled = styled(Link)`
  margin-top: 1rem;
`;

const MarketingCard = props => (
  <Section className="column is-6">
    <div className="card">
      <Section className="section">
        <div className="card-content">
          <div className="columns">
            <div className="column is-4 has-text-centered">
              <figure className="image">
                <img src={props.img} alt={props.alt} />
              </figure>
            </div>
            <div className="column">
              <h2 className="title is-4 has-text-info has-text-weight-medium">
                {props.heading}
              </h2>
            </div>
          </div>
          <div className="content has-text-centered has-text-info">
            {props.description}
            <LinkStyled
              to={props.link}
              className="is-block has-text-weight-semibold"
            >
              FIND OUT MORE
            </LinkStyled>
          </div>
        </div>
      </Section>
    </div>
  </Section>
);

export default MarketingCard;
