import React from 'react';

import NewsItems from './NewsItems';

const NewsData = () => (
  <section className="section">
    <div className="container">
      <div className="columns is-multiline is-mobile">
        <div className="column is-half">
          <NewsItems logo="" />
        </div>
        <div className="column is-half">
          <NewsItems logo="" />
        </div>
        <div className="column is-half">
          <NewsItems logo="" />
        </div>
        <div className="column is-half">
          <NewsItems logo="" />
        </div>
      </div>
    </div>
  </section>
);
export default NewsData;
