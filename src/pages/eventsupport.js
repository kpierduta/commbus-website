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
    contentfulHomePage {
      featureSectionTitle
      iconOne {
        file {
          url
        }
      }
      featureOneTitle
      featureOneSubtitle
      iconTwo {
        file {
          url
        }
      }
      featureTwoTitle
      featureTwoSubtitle
      iconThird {
        file {
          url
        }
      }
      featureThirdTitle
      featureThirdSubtitle
      iconFour {
        file {
          url
        }
      }
      featureFourTitle
      featureFourSubtitle
    }
    contentfulEventSupportPage {
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
      data: { contentfulHomePage: page },
    } = this.props;
    const {
      data: { contentfulEventSupportPage: event },
    } = this.props;
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero
          title="EVENT SUPPORT BUSES & BESPOKE VEHICLES"
          heading="Vehicles, equipment & experienced staff."
          subtitle="Commbus are an experienced event company, creating, supporting and delivering events across the UK. From vehicles, hireable event equipment and our experienced staff."
          bgImage="/images/event/event-support-hero-image@2x.png"
          text="  "
        />
        <Features Feature={page} />
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
