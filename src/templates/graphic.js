import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Features from '../components/Features';
import Banner from '../components/Banner';
import MessageInfo from '../components/MessageInfo';

export const pageQuery = graphql`
  query graphic($slug: String) {
    contentfulVehicleGraphicBlog(slug: { eq: $slug }) {
      seoTitle
      metaDescription
      keywords
      slug
      title
      subtitle
      details {
        details
      }
      mobileThumbnail {
        file {
          url
        }
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
      bannerTitle
      bannerImages {
        file {
          url
        }
      }
      messageTitle
      messageSubtitle
      buttonText
    }
  }
`;

export default class Graphic extends React.Component {
  render() {
    const {
      data: { contentfulVehicleGraphicBlog: page },
    } = this.props;

    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          keywords={page.keyword}
        />
        <HomeHero
          title={page.title}
          heading={page.subtitle}
          subtitle={page.details.details}
          bgImage={page.heroImage.file.url}
          mobileImage={page.mobileHeroImage.file.url}
          text="  "
        />
        <Features Feature={page} />
        <Banner data={page} />
        <MessageInfo data={page} />
      </Layout>
    );
  }
}
