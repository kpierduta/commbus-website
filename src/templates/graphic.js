import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
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
      bannerTitle
      bannerImages {
        file {
          url
        }
      }
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
        <Banner data={page} />
        <MessageInfo />
      </Layout>
    );
  }
}
