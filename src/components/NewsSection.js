import React, { useState } from 'react';

import NewsItems from './NewsItems';
import NewsFilter from './NewsFilter';

const NewsSection = ({ news }) => {
  const [sector, changeSector] = useState('SECTOR');
  const [year, changeYear] = useState('DATE');

  return (
    <div className="section">
      <div className="container has-text-centered-mobile">
        <NewsFilter
          changeSector={changeSector}
          sector={sector}
          year={year}
          changeYear={changeYear}
        />
        <div className="columns is-multiline">
          {news.map(({ node }) => {
            if (node.sector === sector || sector === 'SECTOR') {
              if (node.date === year || year === 'DATE') {
                return <NewsItems key={node.id} item={node} />;
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
