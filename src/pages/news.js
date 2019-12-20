import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import NewsData from '../components/NewsData';

export const newsdataQuery = graphql`
  query newsdata {
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
    return (
      <Layout>
        <Seo title="News & Updates" />
        <PageHero
          title="OUR INTERNAL & EXTERNAL BRANDING OPTIONS"
          heading="Recent work, case studies. marketing insights and business news."
        />
        <StaticQuery
          query={newsdataQuery}
          render={data => {
            const { allContentfulNews: news } = data;
            return (
              <React.Fragment>
                <NewsData news={news.edges} />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
