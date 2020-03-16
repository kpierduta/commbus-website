import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import NewsSection from '../components/NewsSection';

export const newsDataQuery = graphql`
  query newsData {
    contentfulGenericPages(slug: { eq: "News" }) {
      slug
      seoTitle
      metaDescription
      keywords
      heroTitle
      heroSubtitle
    }
    allContentfulNews(sort: { fields: order, order: DESC }) {
      edges {
        node {
          order
          date(formatString: "YYYY")
          sector
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
      data: { contentfulGenericPages: page },
      data: { allContentfulNews: news },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          url={page.keywords}
        />
        <PageHero title={page.heroTitle} heading={page.heroSubtitle} />
        <NewsSection news={news.edges} />
      </Layout>
    );
  }
}
