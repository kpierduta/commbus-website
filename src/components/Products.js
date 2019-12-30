import React from 'react';

const Products = ({ avatar, alt }) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={avatar} alt={alt} />
          </figure>
        </div>
      </div>
    </div>
  );
};
export default Products;
