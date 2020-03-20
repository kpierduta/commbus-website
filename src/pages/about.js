import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import TeamContent from '../components/TeamContent';
import AboutSection from '../components/AboutSection';
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
      heroImage {
        file {
          url
        }
      }
      heroImageMobile {
        file {
          url
        }
      }
      sectionHeading
      sectionSubtitle
      firstParagraph {
        firstParagraph
        childMarkdownRemark {
          html
        }
      }
      secondParagraph {
        secondParagraph
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulTeamMembers(sort: { fields: order }) {
      edges {
        node {
          order
          name
          position
          linkedInIcon
          linkedInUrl
          image {
            title
            file {
              url
            }
          }
          content {
            content
          }
        }
      }
    }
    contentfulHomePage {
      ourClients {
        title
        file {
          url
        }
      }
    }
  }
`;

export default class About extends React.Component {
  render() {
    const {
      data: {
        contentfulAboutPage: page,
        allContentfulTeamMembers: team,
        contentfulHomePage: client,
      },
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
          bgImage={page.heroImage.file.url}
          mobileImage={page.heroImageMobile.file.url}
          text=" "
        />
        <TeamContent team={team.edges} />
        <AboutSection data={page} />
        <OurClient logo={client.ourClients} />
      </Layout>
    );
  }
}
