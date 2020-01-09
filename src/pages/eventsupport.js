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

export const EventQuery = graphql`
  query event {
    contentfulMainPage(slug: { eq: "Event Support" }) {
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

export default class EventSupport extends React.Component {
  render() {
    const {
      data: { contentfulMainPage: event },
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
        <Marketing data={event} />
        <MessageInfo />
        <Branding
          data={event}
          showcase={event.showCase}
          fistbutton="CONTACT US"
          fistlink="/contact"
          secondbutton="ABOUT"
          secondlink="/about"
        />
        <Testimonials />
      </Layout>
    );
  }
}
