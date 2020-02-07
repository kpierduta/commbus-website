import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

import Icon from './elements/Icon';

const firstIcon = <i className="fab fa-linkedin-in" />;
const secondIcon = <i className="fab fa-facebook-f" />;
const thirdIcon = <i className="fab fa-instagram" />;
const fourthIcon = <i className="fab fa-pinterest-p" />;
const fifthIcon = <i className="fab fa-twitter" />;

export const footerQuery = graphql`
  query footer {
    allContentfulCampaignPage(sort: { fields: footerOrder }) {
      edges {
        node {
          slug
          footerOrder
          footerTitle
        }
      }
    }
    allContentfulPages(sort: { fields: footerOrder }) {
      edges {
        node {
          slug
          footerOrder
          footerTitle
        }
      }
    }
    allContentfulVehicleGraphicBlog(sort: { fields: footerOrder }) {
      edges {
        node {
          slug
          footerOrder
          footerTitle
        }
      }
    }
  }
`;

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
  .logo {
    max-height: 7.5rem !important;
    height: auto;
  }
  .navbar-item {
    margin-left: -2rem;
    @media screen and (max-width: 768px) {
      padding: 0rem 0rem;
    }
  }
  .is-spaced {
    padding-bottom: 0.75rem;
  }
  .is-block {
    padding-bottom: 0.5rem;
  }
  .column.is-3 {
    width: 20%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .column.is-4 {
    flex: none;
    width: 25.33333%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Footer = () => (
  <Container className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-3">
          <Link className="navbar-item" to="/">
            <img className="logo" src="/images/com-logo.png" alt="site logo" />
          </Link>
          <Icon icon={firstIcon} />
          <Icon icon={secondIcon} />
          <Icon icon={thirdIcon} />
          <Icon icon={fourthIcon} />
          <Icon icon={fifthIcon} />
        </div>
        <StaticQuery
          query={footerQuery}
          render={data => {
            const {
              allContentfulCampaignPage: camapaign,
              allContentfulPages: page,
              allContentfulVehicleGraphicBlog: vehicle,
            } = data;
            return (
              <>
                <div className="column is-4">
                  <h1 className="is-size-6 has-text-weight-bold is-spaced">
                    Marketing campaigns
                  </h1>
                  {camapaign.edges.map(item => (
                    <Link to={item.node.slug} className="is-size-6 is-block">
                      {item.node.footerTitle}
                    </Link>
                  ))}
                </div>
                <div className="column">
                  <h1 className="is-size-6 has-text-weight-bold is-spaced">
                    Event support
                  </h1>
                  {page.edges.map(item => (
                    <Link to={item.node.slug} className="is-size-6 is-block">
                      {item.node.footerTitle}
                    </Link>
                  ))}
                  <Link to="/hireshop" className="is-size-6 is-block">
                    Hire shop
                  </Link>
                </div>
                <div className="column">
                  <h1 className="is-size-6 has-text-weight-bold is-spaced">
                    Vehicle branding
                  </h1>
                  {vehicle.edges.map(item => (
                    <Link to={item.node.slug} className="is-size-6 is-block">
                      {item.node.footerTitle}
                    </Link>
                  ))}
                </div>
                <div className="column">
                  <h1 className="is-size-6 has-text-weight-bold is-spaced">
                    Terms
                  </h1>
                  <Link to="/privacy-policy" className="is-size-6 is-block">
                    Privacy policy
                  </Link>
                  <Link to="/terms&Condition" className="is-size-6 is-block">
                    Terms & conditions
                  </Link>
                </div>
                <div className="column is-1">
                  <Link to="/">
                    <img src="/images/icon/home.jpg" alt="#" />
                  </Link>
                </div>
              </>
            );
          }}
        />
      </div>
    </div>
  </Container>
);

export default Footer;
