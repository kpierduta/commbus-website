import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Share from '../components/Share';
import NewsContent from '../components/NewsContent';

export const newsQuery = graphql`
  query news($slug: String) {
    contentfulNews(slug: { eq: $slug }) {
      slug
      title
      subtitle
      details
      text
      image {
        file {
          url
        }
      }
      blogContent {
        json
      }
    }
  }
`;

export default class NewsBlog extends React.Component {
  render() {
    console.log('hello world');
    const {
      data: { contentfulNews: news },
    } = this.props;
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero page={news} />
        <Share />
        <NewsContent data={news.blogContent.json} />
      </Layout>
    );
  }
}
