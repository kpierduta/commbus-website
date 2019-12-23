import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Projects from '../components/Projects';

export const projectQuery = graphql`
  query projectdata {
    allContentfulProject(sort: { fields: order }) {
      edges {
        node {
          order
          slug
          projectSizeIsHalf
          projectImage {
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
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <PageHero
          title="SOME OF OUR RECENT
    CAMPAIGNS"
          heading="A look at some of our latest client marketing campaigns."
        />
        <StaticQuery
          query={projectQuery}
          render={data => {
            const { allContentfulProject: project } = data;
            return (
              <React.Fragment>
                <Projects project={project.edges} />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
