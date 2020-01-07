import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Share from '../components/Share';
import Content from '../components/Content';
import ProjectPictures from '../components/ProjectPictures';

export const projectQuery = graphql`
  query project($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      seoTitle
      metaDiscription
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
      blogContent {
        json
      }
      imagesSectionOne {
        imageSizeHalf
        image {
          title
          file {
            url
          }
        }
      }
      blogContentSecond {
        json
      }
      imageSectionSecond {
        imageSizeHalf
        image {
          title
          file {
            url
          }
        }
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
          title={project.heroTitle}
          heading={project.heroSubtitle}
          subtitle={project.details.details}
          text={project.text}
        />
        <Share />
        <Content data={project.blogContent.json} />
        <ProjectPictures data={project.imagesSectionOne} />
        <Content data={project.blogContentSecond.json} />
        <ProjectPictures data={project.imageSectionSecond} />
      </Layout>
    );
  }
}
