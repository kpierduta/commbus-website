import React from 'react';
import Products from './Products';
import Heading from './elements/Heading';

const ProductsData = () => (
  <section className="section">
    <div className="container">
      <Heading title="SOME OF OUR PRODUCT LAUNCH CAMPAIGNS" />
      <div className="columns is-multiline">
        <Products avatar="/images/projects/dummy.png" />
        <Products avatar="/images/projects/dummy.png" />
        <Products avatar="/images/projects/dummy.png" />
        <Products avatar="/images/projects/dummy.png" />
        <Products avatar="/images/projects/dummy.png" />
        <Products avatar="/images/projects/dummy.png" />
      </div>
    </div>
  </section>
);

export default ProductsData;
