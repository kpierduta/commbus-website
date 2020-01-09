import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Projects from '../components/Projects';

export const projectQuery = graphql`
  query projectdata {
    allContentfulGenericPages(filter: { slug: { eq: "Project" } }) {
      edges {
        node {
          slug
          seoTitle
          metaDescription
          keywords
          heroTitle
          heroSubtitle
        }
      }
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
      data: { allContentfulGenericPages: page },
      data: { allContentfulProject: project },
    } = this.props;
    return (
      <Layout>
        {page.edges.map(data => (
          <div>
            <Seo
              title={data.node.seoTitle}
              description={data.node.metaDescription}
              url={data.node.keywords}
            />
            <PageHero
              title={data.node.heroTitle}
              heading={data.node.heroSubtitle}
            />
          </div>
        ))}
        <Projects project={project.edges} />
      </Layout>
    );
  }
}
