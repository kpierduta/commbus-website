import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 1rem;

  .button {
    width: 22rem;
    border-bottom: 2px solid !important;
    padding-top: 1rem;
    padding-left: 0.5rem;
    box-shadow: none;
    border: none;
    :focus {
      box-shadow: none;
    }
  }
  .icon {
    font-size: 2.5rem !important;
    margin-top: -1.5rem !important;
    padding-right: 1rem;
    margin-left: 16rem !important;
  }
  .dropdown-content {
    width: 22rem;
    background-color: ${props => props.theme.secondryColor};
    padding-right: 1rem;
    padding-left: 0.5rem;
  }
  .dropdown-item {
    border-bottom: 2px solid white !important;
    padding-right: 7rem;
    :hover {
      background-color: ${props => props.theme.secondryColor} !important;
    }
  }
  .text {
    width: 8rem !important;
  }
`;

const Dropdown = props => {
  const [active, changedActive] = useState(false);
  return (
    <Container className={active ? 'dropdown is-active' : 'dropdown'}>
      <div className="dropdown-trigger">
        <button
          className="button is-large"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => changedActive(!active)}
        >
          <span className="text">{props.title}</span>
          <span className="icon">
            <i className="fas fa-sort-down" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a
            href="#"
            className="dropdown-item title is-5 has-text-white has-text-weight-medium"
          >
            Dropdown item
          </a>
          <a className="dropdown-item title is-5 has-text-white has-text-weight-medium">
            Other dropdown item
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Dropdown;