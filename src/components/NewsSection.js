import React, { useState } from 'react';

import NewsItems from './NewsItems';
import NewsFilter from './NewsFilter';

const NewsSection = ({ news }) => {
  const [sector, changeSector] = useState('SECTOR');
  const [year, changeYear] = useState('DATE');
  const [length, setlength] = useState(8);

  const blog = news.slice(0, length);

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
          {blog.map(({ node }) => {
            if (node.sector === sector || sector === 'SECTOR') {
              if (node.date === year || year === 'DATE') {
                return <NewsItems key={node.id} item={node} />;
              }
            }
          })}
        </div>
        {blog.length !== news.length ? (
          <div className="has-text-centered">
            <button
              className="button is-primary is-large"
              type="button"
              onClick={() => setlength(news.length)}
            >
              <span className="icon is-medium">
                <img src="/images/icon/chaticon.png" alt="" />
              </span>
              <span className="subtitle is-4 has-text-white">Load More</span>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NewsSection;
