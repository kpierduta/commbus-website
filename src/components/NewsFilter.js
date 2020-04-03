import React, { useState } from 'react';

import Dropdown from './elements/Dropdown';
import DropDownItem from './elements/DropDownItem';

const NewsFilter = ({ sector, changeSector, year, changeYear }) => {
  const [active, setIsActive] = useState(false);
  const [activeYear, setActiveYear] = useState(false);

  return (
    <div className="columns">
      <div className="column">
        <Dropdown
          title={sector}
          active={active}
          onClick={() => setIsActive(!active)}
        >
          <DropDownItem
            title="Business News"
            onClick={() => {
              setIsActive(!active);
              changeSector('Business News');
            }}
          />
          <DropDownItem
            title="Industry Insights"
            onClick={() => {
              setIsActive(!active);
              changeSector('Industry Insights');
            }}
          />
          <DropDownItem
            title="Latest Projects"
            onClick={() => {
              setIsActive(!active);
              changeSector('Latest Projects');
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
          <DropDownItem
            title="2017"
            onClick={() => {
              setActiveYear(!activeYear);
              changeYear('2017');
            }}
          />
          <DropDownItem
            title="2016"
            onClick={() => {
              setActiveYear(!activeYear);
              changeYear('2016');
            }}
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default NewsFilter;
