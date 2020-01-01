import React from 'react';

import Shop from './Shop';

class ShopItems extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {data.map(item => (
              <Shop
                title={item.node.title}
                avatar={item.node.image.file.url}
                alt={item.node.image.title}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default ShopItems;
