import React from 'react';

import NewsItems from './NewsItems';

class NewsData extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <section className="section">
        <div className="container">
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
      </section>
    );
  }
}
export default NewsData;
