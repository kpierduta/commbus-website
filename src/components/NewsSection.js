import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NewsItems from './NewsItems';
import NewsFilter from './NewsFilter';

const StyledButton = styled.div`
  border-radius: 0.4rem;
  padding: 0rem 2rem;
  height: 4.5rem;
  background: ${props => props.theme.darkShades};
  .icon {
    width: 4rem;
  }
  img {
    height: 3rem;
    margin-right: 1rem;
  }
`;

const NewsSection = ({ news, value }) => {
  const [sector, setSector] = useState('SECTOR');
  const [year, setYear] = useState('DATE');
  const [length, setLength] = useState(8);

  const blog = news.slice(0, length);

  useEffect(() => {
    if (sector !== 'SECTOR' || year !== 'DATE') {
      setLength(news.length);
    }
  });

  return (
    <div className="section">
      <div className="container has-text-centered-mobile">
        <NewsFilter
          changeSector={setSector}
          sector={sector}
          year={year}
          changeYear={setYear}
        />
        <div className="columns is-multiline">
          {blog.map(({ node }) => {
            if (node.sector === sector || sector === 'SECTOR') {
              if (node.date === year || year === 'DATE' || year === '< 2016') {
                if (year === '< 2016' && parseFloat(node.date) <= 2016) {
                  return <NewsItems key={node.id} item={node} />;
                }
                return <NewsItems key={node.id} item={node} />;
              }
            }
          })}
        </div>
        {blog.length !== news.length ? (
          <div className="has-text-centered">
            <StyledButton
              className="button  is-large"
              type="button"
              onClick={() => setLength(news.length)}
            >
              <span className="icon">
                <img src="/images/icon/loadMoreIcon.png" alt="" />
              </span>
              <span className="subtitle is-5 has-text-weight-bold has-text-white">
                LOAD MORE
              </span>
            </StyledButton>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NewsSection;
