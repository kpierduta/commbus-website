import React from 'react';

const CaseGallery = ({ images, ImageCover }) => (
  <section className="section">
    <div className="container">
      <div className="columns is-multiline">
        {images.map(items => (
          <div className={ImageCover == 'half' ? 'column is-6' : 'column is-4'}>
            <figure className="image is-3by2">
              <img src={items.file.url} alt={items.title} />
            </figure>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseGallery;
