import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import TeamContent from '../components/TeamContent';
import Testimonials from '../components/Testimonials';

export const teamQuery = graphql`
  query team {
    contentfulAboutPage {
      title
      subtitle
      details {
        details
      }
      image {
        file {
          url
        }
      }
    }
    allContentfulTeamMembers(sort: { fields: order }) {
      edges {
        node {
          order
          name
          position
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default class About extends React.Component {
  render() {
    const {
      data: { contentfulAboutPage: page },
      data: { allContentfulTeamMembers: team },
    } = this.props;
    return (
      <Layout>
        <Seo title="Commbus Team" description="Exhibitiob Bus Hire" />
        <HomeHero page={page} />
        <TeamContent team={team.edges} />
        <Testimonials />
      </Layout>
    );
  }
}
