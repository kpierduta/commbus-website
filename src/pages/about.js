import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import TeamContent from '../components/TeamContent';
import Testimonials from '../components/Testimonials';
import OurClient from '../components/OurClient';

export const teamQuery = graphql`
  query team {
    contentfulAboutPage {
      seoTitle
      metaDescription
      keywords
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
            title
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
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          keywords={page.keywords}
        />
        <HomeHero
          title={page.title}
          heading={page.subtitle}
          subtitle={page.details.details}
          bgImage={page.image.file.url}
          text=" "
        />
        <TeamContent team={team.edges} />
        <Testimonials />
        <OurClient />
      </Layout>
    );
  }
}
