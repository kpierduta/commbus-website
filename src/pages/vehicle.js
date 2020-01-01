import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import VechicleExternal from '../components/VechicleExternal';
import VechicleInternal from '../components/VechicleInternal';

export const VechicleBrandingQuery = graphql`
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
      }
    }
  }
`;

export default class IndexPage extends React.Component {
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
        <VechicleExternal brand={page} data={page.sectionOneRefernce} />
        <VechicleInternal brand={page} data={page.sectionTwoRefernce} />
      </Layout>
    );
  }
}
