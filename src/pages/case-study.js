import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Projects from '../components/Projects';

export const projectQuery = graphql`
  query projectdata {
    contentfulGenericPages(slug: { eq: "Project" }) {
      slug
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
          sector
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
          date(formatString: "YYYY")
          title
          shortDescription {
            shortDescription
          }
        }
      }
    }
  }
`;

export default class Project extends React.Component {
  render() {
    const {
      data: { contentfulGenericPages: page },
      data: { allContentfulProject: project },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          url={page.keywords}
        />
        <PageHero title={page.heroTitle} heading={page.heroSubtitle} />
        <Projects project={project.edges} filter />
      </Layout>
    );
  }
}
