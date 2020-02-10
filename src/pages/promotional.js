import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Marketing from '../components/Marketing';
import VechicleShowCase from '../components/VehicleShowCase';
import Features from '../components/Features';
import MessageInfo from '../components/MessageInfo';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

export const parmotion = graphql`
  query parmotion {
    contentfulMainPages(slug: { eq: "Promotional Buses" }) {
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
      featureThirdSubtitle
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

export default class PromotionalBuses extends React.Component {
  render() {
    const {
      data: { contentfulMainPages: promotion },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={promotion.seoTitle}
          description={promotion.metaDescription}
          keywords={promotion.keywords}
        />
        <HomeHero
          title={promotion.title}
          heading={promotion.subtitle}
          subtitle={promotion.details.details}
          bgImage={promotion.image.file.url}
          text={promotion.text}
        />
        <Features Feature={promotion} />
        <VechicleShowCase data={promotion.vechicleShowCase} />
        <Marketing data={promotion} />
        <Projects reference={promotion.projectReference} />
        <MessageInfo />
        <Testimonials />
      </Layout>
    );
  }
}
