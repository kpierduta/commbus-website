/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Icon from './elements/Icon';

const Section = styled.section`
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  .icon {
    margin: 0rem 0.5rem;
  }
  .navbar {
    background-color: transparent;
  }
  .logo {
    max-height: 7.5rem !important;
    height: auto;
    @media screen and (max-width: 600px) {
      max-height: 4rem !important;
    }
  }
  .navbar-item {
    font-weight: 700;
    font-size: 1rem;
    height: 3rem;
    color: ${props => props.theme.textColorLite};
    :hover {
      color: ${props => props.theme.darkAccent};
      background: transparent;
    }
    :focus {
      background: transparent;
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .is-flex {
    justify-content: flex-end;
  }
  .email {
    margin: 0 0 0 1.5rem;
  }
`;

const ContactWrapper = styled.div`
  margin-bottom: -0.2rem !important;
  margin-top: 1rem;
  font-family: ${props => props.theme.secondaryFontFamily};
  color: ${props => props.theme.textColorLite};
`;

const firstIcon = <i className="fab fa-linkedin-in" />;
const secondIcon = <i className="fab fa-facebook-f" />;
const thirdIcon = <i className="fab fa-instagram" />;
const fourthIcon = <i className="fab fa-pinterest-p" />;
const fifthIcon = <i className="fab fa-twitter" />;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Icon icon={firstIcon} />
              <Icon icon={secondIcon} />
              <Icon icon={thirdIcon} />
              <Icon icon={fourthIcon} />
              <Icon icon={fifthIcon} />
            </div>
          </div>
          <ContactWrapper className="columns">
            <div className="column is-flex">
              <a href="tel:" className="has-text-weight-semibold is-size-4">
                01675 463 555
              </a>
              <a
                href="mailto:"
                className="has-text-weight-semibold is-uppercase is-size-4 email">
                enquiries@commbus.com
              </a>
            </div>
          </ContactWrapper>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img
                  className="logo"
                  src="/images/com-logo.png"
                  alt="site logo"
                />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive ? 'navbar-burger is-active' : 'navbar-burger'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  Promotional Buses
                </Link>
                <Link to="/" className="navbar-item">
                  Event Support
                </Link>
                <Link to="/" className="navbar-item">
                  Vehicle Branding
                </Link>
                <Link to="/" className="navbar-item">
                  About
                </Link>
                <Link to="/" className="navbar-item">
                  Projects
                </Link>
                <Link to="/" className="navbar-item">
                  News
                </Link>
                <Link to="/" className="navbar-item">
                  Contact
                </Link>
                {/* <Link to="/" className="navbar-item">
                  <span className="icon">
                    <i className="fas fa-shopping-cart" />
                  </span>
              </Link> */}
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
