import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import FooterHeading from './FooterHeading';
import FooterOptions from './FooterOptions';

const Container = styled.section`
  position: relative;
  .logo {
    max-height: 7.5rem !important;
    height: auto;
    @media screen and (max-width: 600px) {
      max-height: 4rem !important;
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
        </div>
        <div className="column">
          <ul>
            <FooterHeading title="Marketing campaigns" />
            <FooterOptions option="Awareness Campaign" />
            <FooterOptions option="Product launch" />
            <FooterOptions option="Public consultation" />
          </ul>
        </div>
        <div className="column">
          <FooterHeading title="Event support" />
          <ul>
            <FooterOptions option="Hire shop" />
            <FooterOptions option="Office on location" />
            <FooterOptions option="Landstage" />
          </ul>
        </div>
        <div className="column">
          <ul>
            <FooterHeading title="Vehicle branding" />
            <FooterOptions option="Internal branding" />
            <FooterOptions option="External branding" />
          </ul>
        </div>
        <div className="column">
          <ul>
            <FooterHeading title="Terms" />
            <FooterOptions option="Privacy policy" />
            <FooterOptions option="Terms and conditions" />
          </ul>
        </div>
      </div>
    </div>
  </Container>
);

export default Footer;
