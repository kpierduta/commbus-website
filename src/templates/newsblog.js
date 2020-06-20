import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Share from '../components/Share';
import Content from '../components/Content';
import NewsReference from '../components/NewsReference';

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
      mobileHeroImage {
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
          keywords={news.keywords}
        />
        <HomeHero
          title={news.title}
          heading={news.subtitle}
          subtitle={news.details.details}
          bgImage={news.image.file.url}
          text={news.text}
          mobileImage={news.mobileHeroImage.file.url}
        />
        <Share
          url={`${config.siteUrl}/news/${news.slug}`}
          title={`Checkout ${news.title}`}
        />
        <Content data={news.blogContent.json} />
        <NewsReference news={news.blogReference} />
      </Layout>
    );
  }
}
