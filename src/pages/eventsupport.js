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
      iconOne {
        file {
          url
        }
      }
      featureTwoTitle
      iconTwo {
        file {
          url
        }
      }
      featureThirdTitle
      iconThird {
        file {
          url
        }
      }
      featureFourthTitle
      iconFourth {
        file {
          url
        }
      }
      featureSectionTitle
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
          title="INTERNAL & EXTERNAL BRANDING AND DESIGN"
          subtitle="CLIENT EXAMPLES"
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
