import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

export const clientQuery = graphql`
  query clientlogo {
    allContentfulOurClients(sort: { fields: order }) {
      edges {
        node {
          order
          clientlogo {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

const Section = styled.section`
  .column.is-2 {
    width: 20%;
    margin-top: 1rem;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
const Logo = styled.div`
  background: url(${props => props.logo});
  height: 8rem;
  background-size: 190px 250px !important;
  @media screen and (max-width: 768px) {
    background-size: 312px 306px !important;
  }
  background-repeat: no-repeat !important;
  transition-duration: 2s;
  :hover {
    background-repeat: no-repeat;
    height: 7rem;
    background: rgba(0, 0, 0, 0) url(${props => props.logo}) repeat scroll 0
      bottom;
  }
`;

const OurClient = () => (
  <Section className="section">
    <div className="container">
      <h2 className="subtitle is-5 has-text-weight-bold is-uppercase has-text-centered-mobile">
        Trusted by
      </h2>
      <div className="columns is-multiline">
        <StaticQuery
          query={clientQuery}
          render={data => {
            const { allContentfulOurClients: logo } = data;
            return (
              <React.Fragment>
                {logo.edges.map(item => (
                  <div className="column is-2">
                    <Logo logo={item.node.clientlogo.file.url} />
                  </div>
                ))}
              </React.Fragment>
            );
          }}
        />
      </div>
    </div>
  </Section>
);

export default OurClient;
