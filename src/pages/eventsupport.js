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
    contentfulEventSupportPage {
      title
      subtitle
      text
      details {
        details
      }
      image {
        title
        file {
          url
        }
      }
      featureSectionTitle
      featureOneTitle
      featureOneSubtitle
      iconOne {
        file {
          url
        }
      }
      featureTwoTitle
      featureTwoSubtitle
      iconTwo {
        file {
          url
        }
      }
      featureThirdTitle
      featureThirdSubtitle
      iconThird {
        file {
          url
        }
      }
      iconFour {
        file {
          url
        }
      }
      featureFourTitle
      featureFourSubtitle
      iconOne {
        file {
          url
        }
      }
      camapignSectionTitle
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
      sectionTitle
      sectionSubtitle
      brandShowCase {
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
      data: { contentfulEventSupportPage: event },
    } = this.props;
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero page={event} />
        <Features Feature={event} />
        <Marketing data={event} />
        <MessageInfo />
        <Branding
          data={event}
          showcase={event.brandShowCase}
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
