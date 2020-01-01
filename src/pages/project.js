import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Projects from '../components/Projects';

export const projectQuery = graphql`
  query projectdata {
    contentfulProjectPage {
      seoTitle
      metaDescription
      keywords
      heroTitle
      heroSubtitle
    }
    allContentfulProject(sort: { fields: order }) {
      edges {
        node {
          order
          slug
          projectSizeIsHalf
          projectImage {
            title
            file {
              url
            }
          }
          icon {
            file {
              url
            }
          }
          category
          title
          shortDiscription {
            shortDiscription
          }
        }
      }
    }
  }
`;

export default class Project extends React.Component {
  render() {
    const {
      data: { contentfulProjectPage: page },
      data: { allContentfulProject: project },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          keywords={page.keywords}
        />
        <PageHero title={page.heroTitle} heading={page.heroSubtitle} />
        <Projects project={project.edges} />
      </Layout>
    );
  }
}
