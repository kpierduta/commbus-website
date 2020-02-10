import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Marketing from '../components/Marketing';
import Features from '../components/Features';
import VechicleShowCase from '../components/VehicleShowCase';
import MessageInfo from '../components/MessageInfo';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

export const EventQuery = graphql`
  query event {
    contentfulMainPages(slug: { eq: "Event Support" }) {
      slug
      seoTitle
      metaDescription
      keywords
      title
      subtitle
      text
      details {
        details
      }
      image {
        file {
          url
        }
      }
      featureSectionTitle
      iconOne {
        title
        file {
          url
        }
      }
      featureOneTitle
      featureOneSubtitle
      iconTwo {
        title
        file {
          url
        }
      }
      featureTwoTitle
      featureTwoSubtitle
      iconThird {
        title
        file {
          url
        }
      }
      featureThirdTitle
      featureFourSubtitle
      iconFour {
        title
        file {
          url
        }
      }
      featureFourTitle
      featureFourSubtitle
      vechicleShowCase {
        description
        file {
          url
        }
      }
      campaignSectionTitle
      campaignFirstIcon {
        title
        file {
          url
        }
      }
      campaignFirstTitle
      campaignFirstSubtitle {
        campaignFirstSubtitle
      }
      campaignSecondIcon {
        title
        file {
          url
        }
      }
      campaignSecondTitle
      campaignSecondSubtitle {
        campaignSecondSubtitle
      }
      campaignThirdIcon {
        title
        file {
          url
        }
      }
      campaignThirdTitle
      campaignThirdSubtitle {
        campaignThirdSubtitle
      }
      campaignFourthIcon {
        title
        file {
          url
        }
      }
      campaignFourthTitle
      campaignFourthSubtitle {
        campaignFourthSubtitle
      }
      campaignFirstLink
      campaignSecondLink
      campaignThirdLink
      campaignFourthLink
      projectReference {
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
`;

export default class EventSupport extends React.Component {
  render() {
    const {
      data: { contentfulMainPages: event },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={event.seoTitle}
          description={event.metaDescription}
          keywords={event.keywords}
        />
        <HomeHero
          title={event.title}
          heading={event.subtitle}
          subtitle={event.details.details}
          bgImage={event.image.file.url}
          text={event.text}
        />
        <Features Feature={event} />
        <VechicleShowCase data={event.vechicleShowCase} />
        <Marketing data={event} />
        <MessageInfo />
        <Projects reference={event.projectReference} />
        <Testimonials />
      </Layout>
    );
  }
}
