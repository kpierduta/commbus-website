import React, { useState } from 'react';
import styled from 'styled-components';

import TeamData from './TeamData';
import TeamModalBox from './TeamModalBox';

const Section = styled.div`
  background-color: ${props => props.theme.backgroundColor} !important;
`;

const TeamContent = ({ team }) => {
  const [modalActive, setModalActive] = useState(false);
  const [activeItem, setActiveItem] = useState(undefined);

  return (
    <Section className="section">
      <div className="container">
        <TeamModalBox
          active={modalActive}
          item={activeItem}
          closeModal={() => setModalActive(false)}
        />
        <div className="columns is-multiline">
          {team.map(item => (
            <div className="column is-one-quarter">
              <TeamData
                item={item.node}
                handleOpenModal={aitem => {
                  setModalActive(true);
                  setActiveItem(aitem);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TeamContent;
