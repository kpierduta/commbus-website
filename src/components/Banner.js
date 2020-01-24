import React from 'react';
import Heading from './elements/Heading';

const Banner = ({ data }) => (
  <section className="section">
    <div className="container">
      <Heading title={data.bannerTitle} />
      <div className="columns is-multiline">
        {data.bannerImages.map(item => (
          <div className="column is-4">
            <div className="card">
              <figure className="image is-4by3">
                <img src={item.file.url} alt={item.title} />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Banner;
