import React, { useState } from 'react';
import styled from 'styled-components';

import Dropdown from './elements/Dropdown';
import DropDownItem from './elements/DropDownItem';

const Container = styled.section`
  padding-top: 0rem;
`;

const categories = [
  {
    title: 'ROADSHOW-BUSINESS TO BUSINESS',
    value: 'ROADSHOW-BUSINESS TO BUSINESS',
  },
  {
    title: 'ROADSHOW-BUSINESS TO CONSUMER',
    value: 'ROADSHOW-BUSINESS TO CONSUMER',
  },
  {
    title: 'ROADSHOW-CHARITY & PUBLIC SECTOR',
    value: 'ROADSHOW-CHARITY & PUBLIC SECTOR',
  },
  {
    title: 'ROADSHOW-EDUCATION',
    value: 'ROADSHOW-EDUCATION',
  },
  {
    title: 'EVENT SUPPORT',
    value: 'EVENT SUPPORT',
  },
];

const Year = [
  { title: 'RESET', value: 'DATE' },
  { title: '2020', value: '2020' },
  { title: '2019', value: '2019' },
  { title: '2018', value: '2018' },
  { title: '2017', value: '2017' },
  { title: '2016', value: '2016' },
  { title: '< 2016', value: '< 2016' },
];

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
              onClick={() => setIsActive(!active)}>
              {categories.map(item => (
                <DropDownItem
                  title={item.title}
                  onClick={() => {
                    setIsActive(!active);
                    changeSector(item.value);
                  }}
                />
              ))}
            </Dropdown>
          </div>
          <div className="column">
            <Dropdown
              title={year}
              active={activeYear}
              onClick={() => setActiveYear(!activeYear)}>
              {Year.map(item => (
                <DropDownItem
                  title={item.title}
                  onClick={() => {
                    setActiveYear(!activeYear);
                    changeYear(item.value);
                  }}
                />
              ))}
            </Dropdown>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectFilter;
