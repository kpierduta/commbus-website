import React from 'react';
import styled from 'styled-components';
import NewsItems from './NewsItems';

const Section = styled.div``;

class NewsData extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <Section className="section">
        <div className="container has-text-centered-mobile">
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
      </Section>
    );
  }
}
export default NewsData;
