import React from 'react';
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
    background-color: ${props => props.theme.mainBrandColor};
    padding-right: 1rem;
    padding-left: 0.5rem;
  }
  .dropdown-item {
    border-bottom: 2px solid white !important;
    padding-left: 0.5rem;
    :hover {
      background-color: ${props => props.theme.mainBrandColor} !important;
    }
  }
  .text {
    width: 1rem !important;
  }
`;

const Dropdown = ({ active, children, onClick, title }) => {
  return (
    <Container className={active ? 'dropdown is-active' : 'dropdown'}>
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button is-large"
          aria-controls="dropdown-menu"
          onClick={onClick}
        >
          <span className="text">{title}</span>
          <span className="icon">
            <i className="fas fa-sort-down" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">{children}</div>
      </div>
    </Container>
  );
};

export default Dropdown;
