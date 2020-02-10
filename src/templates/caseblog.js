import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Share from '../components/Share';
import Content from '../components/Content';

export const projectQuery = graphql`
  query project($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      seoTitle
      metaDescription
      keywords
      text
      heroTitle
      heroSubtitle
      details {
        details
      }
      heroImage {
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
      blogContentSecond {
        json
      }
    }
  }
`;

export default class Projectblog extends React.Component {
  render() {
    const {
      data: { contentfulProject: project },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={project.seoTitle}
          description={project.metaDescription}
          url={project.keywords}
        />
        <HomeHero
          bgImage={project.heroImage.file.url}
          mobileImage={project.mobileHeroImage.file.url}
          title={project.heroTitle}
          heading={project.heroSubtitle}
          subtitle={project.details.details}
          text={project.text}
        />
        <Share
          url={`${config.siteUrl}/news/${project.slug}`}
          title={`Checkout ${project.heroTitle}`}
        />
        <Content data={project.blogContent.json} />
        <Content data={project.blogContentSecond.json} />
      </Layout>
    );
  }
}
