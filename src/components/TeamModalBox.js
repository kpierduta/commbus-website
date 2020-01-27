import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  .modal-content {
    background-color: #fff !important;
    border: 7px solid ${props => props.theme.lightShades};
  }
  .button {
    box-shadow: none;
    background-color: #fff;
    border-width: 1px;
  }
  .text {
    padding: 1rem 0rem 0rem 0rem;
  }
  .social{
    padding: 0rem 1rem;
  }
  }
  .icon {
    font-size: 2rem;
  }
`;

const TeamModalBox = ({ active, item, closeModal }) => {
  return (
    <Container className={active ? 'modal is-active' : 'modal'}>
      <div className="modal-background" />
      <div className="modal-content">
        <button
          type="button"
          className="button is-medium is-pulled-right"
          onClick={closeModal}
        >
          <i className="fas fa-times-circle" />
        </button>
        <section className="section">
          {item ? (
            <div className="container">
              <div className="columns">
                <div className="column has-text-centered">
                  <figure className="image is-1by1">
                    <img
                      className="is-rounded"
                      src={item.image.file.url}
                      alt={item.image.title}
                    />
                  </figure>
                  <p className="title is-5 text has-text-weight-light">
                    {item.name}
                  </p>
                  <p className="subtitle is-6  is-size-5-mobile">
                    {item.position}
                  </p>
                  <div className={item.linkedInIcon ? 'social' : 'is-hidden'}>
                    <p className="subtitle is-6  is-size-5-mobile">
                      Connect with me on LinkedIn
                    </p>
                    <Link to={item.linkedInUrl}>
                      <span className="icon">
                        <i className="fab fa-linkedin" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="column">
                  <p>{item.content.content}</p>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </Container>
  );
};

export default TeamModalBox;
