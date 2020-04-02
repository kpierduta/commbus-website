import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .card-content {
    padding: 0.75rem !important;
  }

  .column.is-2 {
    padding: 1rem 0rem 0rem 0.2rem;
    background-color: ${props => props.theme.mainBrandColor} !important;
  }

  .button {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    @media screen and (max-width: 767px) {
      margin: 4px;
    }
    @media only screen and (min-device-width: 481px) and (max-device-width: 1023px) and (orientation: portrait) {
      margin: 0px 0px 0px 25px;
    }
    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
      margin: 0px 0px 0px 0px;
    }
  }

  .subtitle {
    margin-bottom: 0.5rem;
  }

  .subtitle.is-6 {
    font-size: 0.9rem !important;
    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
      font-size: 0.5rem !important;
    }
  }
  .subtitle.is-5 {
    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
      font-size: 1rem;
    }
  }

  .image {
    border-radius: 10rem;
  }
  .column.is-2 {
    margin: 0rem -0.8rem 0rem 0rem;
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
              <h1 className="subtitle is-5 has-text-info has-text-weight-bold">
                {item.name}
              </h1>
              <p className="subtitle is-6 has-text-info text is-size-5-mobile">
                {item.position}
              </p>
            </div>
            <div className="column is-2">
              <button
                className="button"
                type="button"
                onClick={() => handleOpenModal(item)}
              >
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
