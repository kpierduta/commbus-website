import React from 'react';
import Products from './Products';
import Heading from './elements/Heading';

const ProductsData = ({ Banner }) => (
  <section className="section">
    <div className="container">
      <Heading title="SOME OF OUR PRODUCT LAUNCH CAMPAIGNS" />
      <div className="columns is-multiline">
        {Banner.map(item => (
          <Products avatar={item.images.file.url} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductsData;
