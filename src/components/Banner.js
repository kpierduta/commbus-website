import React from 'react';

import Heading from './elements/Heading';
import ImageModal from './ImageModal';

const Banner = ({ data }) => (
  <section className="section">
    <div className="container">
      <Heading title={data.bannerTitle} />
      <div className="columns is-multiline">
        {data.bannerImages.map(item => (
          <div className="column is-4">
            <div className="card">
              <figure>
                <ImageModal src={item.file.url} alt={item.title} />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Banner;
