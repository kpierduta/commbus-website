import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Share from '../components/Share';
import ProjectContent from '../components/ProjectConetnt';

export const projectQuery = graphql`
  query project($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
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
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero
          bgImage={project.heroImage.file.url}
          title={project.heroTitle}
          heading={project.heroSubtitle}
          subtitle={project.details.details}
          text={project.text}
        />
        <Share />
        <ProjectContent data={project.blogContent.json} />
      </Layout>
    );
  }
}
