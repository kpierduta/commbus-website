import React from 'react';
import Products from './Products';
import Heading from './elements/Heading';

const ProductsData = ({ Banner, title }) => (
  <section className="section">
    <div className="container">
      <Heading title={title} />
      <div className="columns is-multiline">
        {Banner.map(item => (
          <Products avatar={item.images.file.url} alt={item.images.title} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductsData;
