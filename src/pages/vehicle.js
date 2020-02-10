import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import VehicleExternal from '../components/VehicleExternal';
import VehicleInternal from '../components/VehicleInternal';

export const VehicleBrandingQuery = graphql`
  query Branding {
    contentfulVehicleBrandingPage {
      seoTitle
      metaDescription
      keywords
      heroTitle
      heroSubtitle
      sectionOneTitle
      sectionOneSubtitle {
        sectionOneSubtitle
      }
      sectionOneRefernce {
        slug
        blogTitle
        blogSubtitle {
          blogSubtitle
        }
        thumbnailImage {
          file {
            url
          }
        }
        mobileThumbnail {
          file {
            url
          }
        }
      }
      sectionTwoTitle
      sectionTwoSubtitle {
        sectionTwoSubtitle
      }
      sectionTwoRefernce {
        slug
        blogTitle
        blogSubtitle {
          blogSubtitle
        }
        thumbnailImage {
          file {
            url
          }
        }
        mobileThumbnail {
          file {
            url
          }
        }
      }
    }
  }
`;

export default class VehicleBrandingPage extends React.Component {
  render() {
    const {
      data: { contentfulVehicleBrandingPage: page },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          keywords={page.keywords}
        />
        <PageHero title={page.heroTitle} heading={page.heroSubtitle} />
        <VehicleExternal brand={page} data={page.sectionOneRefernce} />
        <VehicleInternal brand={page} data={page.sectionTwoRefernce} />
      </Layout>
    );
  }
}
