import React, { useState } from 'react';
import styled from 'styled-components';

import Dropdown from './elements/Dropdown';
import DropDownItem from './elements/DropDownItem';

const Container = styled.section`
  padding-top: 0rem;
`;

const ProjectFilter = ({ sector, changeSector }) => {
  const [active, setIsActive] = useState(false);
  return (
    <Container className="section">
      <div className="container">
        <Dropdown
          title={sector}
          active={active}
          onClick={() => setIsActive(!active)}
        >
          <DropDownItem
            title="ROADSHOW-BUSINESS TO BUSINESS"
            onClick={() => {
              setIsActive(!active);
              changeSector('ROADSHOW-BUSINESS TO BUSINESS');
            }}
          />
          <DropDownItem
            title="ROADSHOW-BUSINESS TO CONSUMER"
            onClick={() => {
              setIsActive(!active);
              changeSector('ROADSHOW-BUSINESS TO CONSUMER');
            }}
          />
          <DropDownItem
            title="ROADSHOW-CHARITY & PUBLIC SECTOR"
            onClick={() => {
              setIsActive(!active);
              changeSector('ROADSHOW-CHARITY & PUBLIC SECTOR');
            }}
          />
          <DropDownItem
            title="ROADSHOW-EDUCATION"
            onClick={() => {
              setIsActive(!active);
              changeSector('ROADSHOW-EDUCATION');
            }}
          />
          <DropDownItem
            title="EVENT SUPPORT"
            onClick={() => {
              setIsActive(!active);
              changeSector('EVENT SUPPORT');
            }}
          />
        </Dropdown>
      </div>
    </Container>
  );
};

export default ProjectFilter;
