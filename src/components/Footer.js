import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
  .column.is-3 {
    width: 20%;
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
          <h1 className="is-size-6 has-text-weight-bold is-spaced">
            Marketing campaigns
          </h1>
          <Link to="/" className="is-size-6 is-block">
            Business to business
          </Link>
          <Link to="/" className="is-size-6 is-block">
            Business to consumer
          </Link>
          <Link to="/" className="is-size-6 is-block">
            Charity, public sector organisations
          </Link>
          <Link to="/" className="is-size-6 is-block">
            Education
          </Link>
        </div>
        <div className="column">
          <h1 className="is-size-6 has-text-weight-bold is-spaced">
            Event support
          </h1>
          <Link to="/Office-on-location" className="is-size-6 is-block">
            Office on location
          </Link>
          <Link to="/location" className="is-size-6 is-block">
            Public address
          </Link>
          <Link to="/landstage" className="is-size-6 is-block">
            landstage
          </Link>
          <Link to="/" className="is-size-6 is-block">
            Parades
          </Link>
          <Link to="/hireshop" className="is-size-6 is-block">
            Hire shop
          </Link>
        </div>
        <div className="column">
          <h1 className="is-size-6 has-text-weight-bold is-spaced">
            Vehicle branding
          </h1>
          <Link to="/landstage" className="is-size-6 is-block">
            Branding options
          </Link>
          <Link to="/landstage" className="is-size-6 is-block">
            Simple internal
          </Link>
          <Link to="/landstage" className="is-size-6 is-block">
            Bespoke internal
          </Link>
          <Link to="/landstage" className="is-size-6 is-block">
            Banner graphics
          </Link>
          <Link to="/landstage" className="is-size-6 is-block">
            Full wrap
          </Link>
        </div>
        <div className="column">
          <h1 className="is-size-6 has-text-weight-bold is-spaced">Terms</h1>
          <Link to="/privacy-policy" className="is-size-6 is-block">
            Privacy policy
          </Link>
          <Link to="/landstage" className="is-size-6 is-block">
            Terms and conditions
          </Link>
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
