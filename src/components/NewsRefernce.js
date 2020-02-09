import React from 'react';
import NewsItems from './NewsItems';

class NewsRefernce extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <section className="section">
        <div className="container has-text-centered-mobile">
          <h1 className="title is-4">RELATED ARTICLES</h1>
          <div className="columns is-multiline">
            {news.map(item => (
              <NewsItems
                title={item.title}
                bgImage={item.thumbnail.file.url}
                link={`/news/${item.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default NewsRefernce;
