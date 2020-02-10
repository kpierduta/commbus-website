import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .card {
    min-height: 33rem;
    @media screen and (max-width: 768px) {
      height: auto;
    }
    @media screen and (min-width: 1407px) {
      min-height: 35rem;
    }
  }
  .all-text {
    margin-bottom: 0.5rem;
  }
`;

const BrandingItem = ({ item }) => {
  return (
    <Wrapper className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={item.image.file.url} alt={item.image.title} />
          </figure>
        </div>
        <div className="card-content">
          <p className="has-text-weight-semibold all-text has-text-info">
            {item.title}
          </p>
          <div className="content">
            <ul>
              {item.points.map(data => (
                <li>
                  <p className="subtitle is-6 has-text-info">{data}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default BrandingItem;
