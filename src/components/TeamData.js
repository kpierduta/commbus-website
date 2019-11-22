import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .text {
    color: ${props => props.theme.lightShades} !important;
    font-family: ${props => props.theme.primaryFontFamily} !important;
  }
  .icon {
    margin: 0.8rem 0.3rem;
  }
  .card-content {
    padding: 0.75rem !important;
  }
  .is-2 {
    background-color: ${props => props.theme.lightShades} !important;
  }
  .subtitle {
    font-size: 0.9rem !important;
  }
`;

const TeamData = ({ avatar, name, position }) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by5">
            <img src={avatar} alt="avatars " />
          </figure>
        </div>
        <div className="card-content">
          <div className="columns is-multiline is-mobile">
            <div className="column">
              <p className="title is-5 text">{name}</p>
              <p className="subtitle is-6 text is-size-5-mobile">{position}</p>
            </div>
            <div className="column is-2">
              <span className="has-text-white">
                <i className="fas fa-plus-circle icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TeamData;
