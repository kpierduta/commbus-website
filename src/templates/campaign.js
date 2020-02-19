import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import FeaturesSubPage from '../components/FeaturesSubPage';
import Branding from '../components/Branding';
import MessageInfo from '../components/MessageInfo';
import VehicleShowCase from '../components/VehicleShowCase';
import Testimonials from '../components/Testimonials';

export const CampaignQuery = graphql`
  query campaign($slug: String) {
    contentfulCampaignPage(slug: { eq: $slug }) {
      seoTitle
      metaDescription
      keywords
      slug
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
      mobileHeroImage {
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
      featureFourTitle
      featureFourSubtitle
      iconFour {
        file {
          url
        }
      }
      sectionTitle
      sectionSubtitle
      brandingShowCase {
        image {
          title
          file {
            url
          }
        }
        title
        points
        firstPoint
        secondPoint
        thirdPoint
        fourthPoint
      }
      messageTitle
      messageSubtitle
      buttonText
      clientExample {
        title
        description
        file {
          url
        }
      }
    }
  }
`;

export default class CampaignPage extends React.Component {
  render() {
    const {
      data: { contentfulCampaignPage: campaign },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={campaign.seoTitle}
          description={campaign.metaDescription}
          keywords={campaign.keyword}
        />
        <HomeHero
          title={campaign.title}
          heading={campaign.subtitle}
          subtitle={campaign.details.details}
          bgImage={campaign.heroImage.file.url}
          mobileImage={campaign.mobileHeroImage.file.url}
          text="  "
        />
        <FeaturesSubPage data={campaign} />
        <Branding data={campaign} />
        <MessageInfo data={campaign} />
        <VehicleShowCase data={campaign.clientExample} />
        <Testimonials />
      </Layout>
    );
  }
}
