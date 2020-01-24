import React from 'react';

import NewsItems from './NewsItems';
import Dropdown from './elements/Dropdown';

class NewsSection extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <div className="section">
        <div className="container has-text-centered-mobile">
          <div className="columns">
            <div className="column">
              <Dropdown title="SECTOR" />
            </div>
            <div className="column">
              <Dropdown title="Date" />
            </div>
          </div>
          <div className="columns is-multiline">
            {news.map(item => (
              <NewsItems
                title={item.node.title}
                bgImage={item.node.thumbnail.file.url}
                link={`/news/${item.node.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default NewsSection;
