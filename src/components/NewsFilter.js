import React, { useState } from 'react';

import Dropdown from './elements/Dropdown';
import DropDownItem from './elements/DropDownItem';

const NewsFilter = ({ sector, changeSector, year, changeYear }) => {
  const [active, setIsActive] = useState(false);
  const [activeYear, setActiveYear] = useState(false);

  const Year = [
    { title: 'RESET', value: 'DATE' },
    { title: '2020', value: '2020' },
    { title: '2019', value: '2019' },
    { title: '2018', value: '2018' },
    { title: '2017', value: '2017' },
    { title: '2016', value: '2016' },
    { title: '< 2016', value: '< 2016' },
  ];

  const Sectors = ['Business News', 'Industry Insights', 'Latest Projects'];

  return (
    <div className="columns">
      <div className="column">
        <Dropdown
          title={sector}
          active={active}
          onClick={() => setIsActive(!active)}
        >
          {Sectors.map(item => (
            <DropDownItem
              title={item}
              onClick={() => {
                setIsActive(!active);
                changeSector(item);
              }}
            />
          ))}
        </Dropdown>
      </div>
      <div className="column">
        <Dropdown
          title={year}
          active={activeYear}
          onClick={() => setActiveYear(!activeYear)}
        >
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
  );
};

export default NewsFilter;
