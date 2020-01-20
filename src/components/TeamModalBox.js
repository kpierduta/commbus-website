import React from 'react';
import styled from 'styled-components';

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
`;

const TeamModalBox = ({ active, item, closeModal }) => {
  return (
    <Container className={active ? 'modal is-active' : 'modal'}>
      <div className="modal-background" />
      <div className="modal-content is-clipped">
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
                  <p className="title is-5 text">{item.name}</p>
                  <p className="subtitle is-6  is-size-5-mobile">
                    {item.position}
                  </p>
                </div>
                <div className="column">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
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
