import React, { useState } from 'react';

import Dropdown from './elements/Dropdown';

const NewsFilter = () => {
  const [title, setTitle] = useState('SECTOR');

  return (
    <div className="columns">
      <div className="column">
        <Dropdown title={title}>
          <button
            type="button"
            className="dropdown-item title is-5 has-text-white has-text-weight-medium"
            onClick={() => setTitle('Business News')}
          >
            Business News
          </button>
          <button
            type="button"
            className="dropdown-item title is-5 has-text-white has-text-weight-medium"
            onClick={() => setTitle(' Industry Insights')}
          >
            Industry Insights
          </button>
          <button
            type="button"
            className="dropdown-item title is-5 has-text-white has-text-weight-medium"
            onClick={() => setTitle('Latest Projects')}
          >
            Latest Projects
          </button>
        </Dropdown>
      </div>
      <div className="column">
        <Dropdown title="Date">
          <button
            type="button"
            className="dropdown-item title is-5 has-text-white has-text-weight-medium"
            onClick={() => console.log('helloworld')}
          >
            2020
          </button>
          <button
            type="button"
            className="dropdown-item title is-5 has-text-white has-text-weight-medium"
            onClick={() => console.log('helloworld')}
          >
            2019
          </button>
          <button
            type="button"
            className="dropdown-item title is-5 has-text-white has-text-weight-medium"
            onClick={() => console.log('helloworld')}
          >
            2018
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default NewsFilter;
