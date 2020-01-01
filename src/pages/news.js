import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import NewsData from '../components/NewsData';

export const newsdataQuery = graphql`
  query newsdata {
    contentfulNewsPage {
      seoTitle
      metaDescription
      keywords
      heroTitle
      heroSubtitle
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
      data: { contentfulNewsPage: page },
      data: { allContentfulNews: news },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          url={page.keywords}
        />
        <PageHero
          title="OUR INTERNAL & EXTERNAL BRANDING OPTIONS"
          heading="Recent work, case studies. marketing insights and business news."
        />
        <NewsData news={news.edges} />
      </Layout>
    );
  }
}
