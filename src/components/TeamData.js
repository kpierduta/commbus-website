import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .text {
    color: ${props => props.theme.lightShades} !important;
    font-family: ${props => props.theme.primaryFontFamily} !important;
  }
  .card-content {
    padding: 0.75rem !important;
  }
  .is-2 {
    padding: 1rem 0rem 0rem 0.2rem;
    background-color: ${props => props.theme.lightShades} !important;
  }

  .button {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }
  .subtitle {
    font-size: 0.9rem !important;
  }
  .image {
    border-radius: 10rem;
  }
`;

const TeamData = ({ item, handleOpenModal }) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by5">
            <img src={item.image.file.url} alt={item.image.title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="columns is-multiline is-mobile">
            <div className="column">
              <p className="title is-5 text">{item.name}</p>
              <p className="subtitle is-6 text is-size-5-mobile">
                {item.position}
              </p>
            </div>
            <div className="column is-2">
              <button className="button" onClick={() => handleOpenModal(item)}>
                <span className="icon has-text-white">
                  <i className="fas fa-plus-circle icon" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TeamData;
