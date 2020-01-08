import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .text {
    color: ${props => props.theme.lightShades} !important;
    font-family: ${props => props.theme.primaryFontFamily} !important;
  }
  // .icon {
  //   margin: 0.8rem 0.3rem;
  // }
  .card-content {
    padding: 0.75rem !important;
  }
  .is-2 {
    padding: 1rem 0rem 0rem 0.2rem;
    background-color: ${props => props.theme.lightShades} !important;
  }
  .modal-content {
    background-color: #fff !important;
  }
  .button {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }
  .subtitle {
    font-size: 0.9rem !important;
  }
`;

const TeamData = ({ avatar, name, position, alt }) => {
  const [active, close] = useState(false);
  return (
    <Wrapper>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by5">
            <img src={avatar} alt={alt} />
          </figure>
        </div>
        <div className="card-content">
          <div className="columns is-multiline is-mobile">
            <div className="column">
              <p className="title is-5 text">{name}</p>
              <p className="subtitle is-6 text is-size-5-mobile">{position}</p>
            </div>
            <div className="column is-2">
              <button class="button" onClick={() => close(!active)}>
                <span className="icon has-text-white">
                  <i className="fas fa-plus-circle icon" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class={active ? 'modal is-active' : 'modal'}>
        <div class="modal-background"></div>
        <div class="modal-content is-clipped">
          <button
            class="button is-medium is-pulled-right"
            onClick={() => close(!active)}
          >
            <i class="fas fa-times-circle"></i>
          </button>
          <section class="section">
            <div class="container">
              <div class="columns">
                <div class="column">
                  {' '}
                  <img src={avatar} alt={alt} />
                </div>
                <div class="column">
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
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default TeamData;
