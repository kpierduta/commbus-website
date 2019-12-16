import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import FooterHeading from './FooterHeading';
import FooterOptions from './FooterOptions';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
  .logo {
    max-height: 7.5rem !important;
    height: auto;
    @media screen and (max-width: 600px) {
      max-height: 4rem !important;
    }
  }
  .is-spaced {
    padding-bottom: 0.75rem;
  }
  .is-block {
    padding-bottom: 0.5rem;
  }
  .column is-3 {
    width: 21%;
  }
`;

const LinkStyled = styled(Link)`
  width: 60px;
  height: 50px;
  background: ${props => props.theme.secondryColor};
  color: #ffff;
  margin-top: 10rem;
  font-size: 2rem;
  :hover {
    color: #ffff;
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
        <div className="column is-3">
          <FooterHeading title="Marketing campaigns" />
          <FooterOptions option="Awareness Campaign" />
          <FooterOptions option="Product launch" />
          <FooterOptions option="Public consultation" />
        </div>
        <div className="column">
          <FooterHeading title="Event support" />
          <Link to="/hireshop">
            <FooterOptions option="Hire shop" />
          </Link>
          <FooterOptions option="Office on location" />
          <FooterOptions option="Landstage" />
        </div>
        <div className="column">
          <FooterHeading title="Vehicle branding" />
          <FooterOptions option="Internal branding" />
          <FooterOptions option="External branding" />
        </div>
        <div className="column">
          <FooterHeading title="Terms" />
          <FooterOptions option="Privacy policy" />
          <FooterOptions option="Terms and conditions" />
        </div>
        <div className="column is-1">
          <LinkStyled class="icon">
            <i className="fas fa-home" />
          </LinkStyled>
        </div>
      </div>
    </div>
  </Container>
);

export default Footer;
