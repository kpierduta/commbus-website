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
    contentfulPromotionalBuses {
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
      data: { contentfulPromotionalBuses: promotion },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Exhibitiob Bus Hire"
          description="Exhibitiob Bus Hire"
          url="test"
        />
        <HomeHero
          title={promotion.title}
          heading="Double deck buses, open top and single deck coaches. "
          subtitle="Commbus has a fleet of promotional buses for hire and buy (for longer term projects) so if you are looking for a creative solution that will give you 
          great impact - a branded bus is very hard to miss."
          bgImage="/images/promotanal/promo-bus-hero-image@2x.png"
          text=" "
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
