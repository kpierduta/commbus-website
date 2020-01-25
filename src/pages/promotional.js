import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Marketing from '../components/Marketing';
import Features from '../components/Features';
import MessageInfo from '../components/MessageInfo';
import Branding from '../components/Branding';
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
      sectionTitle
      sectionSubtitle
      showCase {
        image {
          title
          file {
            url
          }
        }
        title
        firstPoint
        secondPoint
        thirdPoint
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
        <Marketing data={promotion} />
        <MessageInfo />
        <Branding
          data={promotion}
          showcase={promotion.showCase}
          fistbutton="CONTACT US"
          fistlink="/contact"
          secondbutton="ABOUT"
          secondlink="/team"
        />
        <Testimonials />
      </Layout>
    );
  }
}
