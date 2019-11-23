import React from 'react';

const Products = ({ avatar }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={avatar} alt="products" />
        </figure>
      </div>
    </div>
  );
};
export default Products;
