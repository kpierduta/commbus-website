import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import NewsData from '../components/NewsData';

export const newsdataQuery = graphql`
  query newsdata {
    allContentfulGenericPages(filter: { slug: { eq: "News" } }) {
      edges {
        node {
          slug
          seoTitle
          metaDescription
          keywords
          heroTitle
          heroSubtitle
        }
      }
    }
    allContentfulNews(sort: { fields: order }) {
      edges {
        node {
          order
          slug
          title
          thumbnail {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default class NewsPage extends React.Component {
  render() {
    const {
      data: { allContentfulGenericPages: page },
      data: { allContentfulNews: news },
    } = this.props;
    return (
      <Layout>
        {page.edges.map(data => (
          <div>
            <Seo
              title={data.node.seoTitle}
              description={data.node.metaDescription}
              url={data.node.keywords}
            />
            <PageHero
              title={data.node.heroTitle}
              heading={data.node.heroSubtitle}
            />
          </div>
        ))}
        <NewsData news={news.edges} />
      </Layout>
    );
  }
}
