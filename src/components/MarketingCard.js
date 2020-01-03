import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  .card {
    height: 25rem;
    border: 2px solid ${props => props.theme.lightShades};
    box-shadow: none;
    @media screen and (max-width: 768px) {
      height: auto;
    }
  }
  .section {
    padding: 0rem 0.5rem;
  }
  .card-content {
    padding: 2rem 1.25rem 1.25rem 1.25rem;
  }
  .content {
    height: 10rem;
  }
  h2 {
    margin-top: 1.5rem;
  }
`;

const LinkStyled = styled(Link)`
  font-family: ${props => props.theme.secondaryFontFamily};
  margin-top: 1.5rem;
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
          <div className="content has-text-centered">
            <p className="has-text-info">{props.description}</p>
          </div>
          <div className="has-text-centered">
            <LinkStyled
              to={props.link}
              className="title is-4 has-text-info has-text-weight-normal"
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
