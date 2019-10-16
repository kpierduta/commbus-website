/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
    max-height: 5.5rem !important;
    height: auto;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 700;
    font-size: 0.9rem;
    :hover {
      color: ${props => props.theme.darkAccent};
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
`;

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
              <span className="icon has-text-grey-light">
                <i className="fab fa-facebook-f" />
              </span>
              <span className="icon has-text-grey-light">
                <i className="fab fa-twitter" />
              </span>
              <span className="icon has-text-grey-light">
                <i className="fab fa-instagram" />
              </span>
              <span className="icon has-text-grey-light">
                <i className="fab fa-linkedin-in" />
              </span>
              <span className="icon has-text-grey-light">
                <i className="fab fa-pinterest-square" />
              </span>
            </div>
            <div className="column has-text-right">
              <p className="has-text-weight-semibold">
                {' '}
                01675 463 555 | enquiries@commbus.com
              </p>
            </div>
          </div>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img
                  className="logo"
                  src="/images/Commbus-Logo.png"
                  alt="site logo"
                />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
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
                  Bus Branding
                </Link>
                <Link to="/" className="navbar-item">
                  Projects
                </Link>
                <Link to="/" className="navbar-item">
                  Meet the Team
                </Link>
                <Link to="/" className="navbar-item">
                  News
                </Link>
                <Link to="/" className="navbar-item">
                  Contact Us
                </Link>
                <Link to="/" className="navbar-item">
                  <span className="icon">
                    <i className="fas fa-shopping-cart" />
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
