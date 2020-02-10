import React from 'react';

import NewsItems from './NewsItems';
import NewsFilter from './NewsFilter';

class NewsSection extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <div className="section">
        <div className="container has-text-centered-mobile">
          <NewsFilter />
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
