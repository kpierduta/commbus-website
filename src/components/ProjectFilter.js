import React, { useState } from 'react';
import styled from 'styled-components';

import Dropdown from './elements/Dropdown';
import DropDownItem from './elements/DropDownItem';

const Container = styled.section`
  padding-top: 0rem;
`;

const ProjectFilter = ({ sector, changeSector, year, changeYear }) => {
  const [active, setIsActive] = useState(false);
  const [activeYear, setActiveYear] = useState('');
  return (
    <Container className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
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
          <div className="column">
            <Dropdown
              title={year}
              active={activeYear}
              onClick={() => setActiveYear(!activeYear)}
            >
              <DropDownItem
                title="2020"
                onClick={() => {
                  setActiveYear(!activeYear);
                  changeYear('2020');
                }}
              />
              <DropDownItem
                title="2019"
                onClick={() => {
                  setActiveYear(!activeYear);
                  changeYear('2019');
                }}
              />
              <DropDownItem
                title="2018"
                onClick={() => {
                  setActiveYear(!activeYear);
                  changeYear('2018');
                }}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectFilter;
