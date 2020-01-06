import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Share from '../components/Share';
import NewsContent from '../components/NewsContent';
import NewsRefernce from '../components/NewsRefernce';

export const newsQuery = graphql`
  query news($slug: String) {
    contentfulNews(slug: { eq: $slug }) {
      seoTitle
      metaDescription
      keywords
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
      blogReference {
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
`;

export default class NewsBlog extends React.Component {
  render() {
    const {
      data: { contentfulNews: news },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={news.seoTitle}
          description={news.metaDescription}
          url={news.keywords}
        />
        <HomeHero
          title={news.title}
          heading={news.subtitle}
          subtitle={news.details.details}
          bgImage={news.image.file.url}
          text={news.text}
        />
        <Share />
        <NewsContent data={news.blogContent.json} />
        <NewsRefernce news={news.blogReference} />
      </Layout>
    );
  }
}
