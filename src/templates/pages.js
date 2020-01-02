import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import FeaturesSubPage from '../components/FeaturesSubPage';
import ProductsData from '../components/ProductsData';
import MessageInfo from '../components/MessageInfo';
import Branding from '../components/Branding';
import Testimonials from '../components/Testimonials';

export const pageQuery = graphql`
  query Page($slug: String) {
    contentfulPages(slug: { eq: $slug }) {
      seoTitle
      metaDescription
      keywords
      title
      subtitle
      details {
        details
      }
      image {
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
      bannerSectionTitle
      banner {
        images {
          title
          file {
            url
          }
        }
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

export default class page extends React.Component {
  render() {
    const {
      data: { contentfulPages: page },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          url={page.keywords}
        />
        <HomeHero
          title={page.title}
          heading={page.subtitle}
          subtitle={page.details.details}
          bgImage={page.image.file.url}
          text=" "
        />
        <FeaturesSubPage data={page} />
        <ProductsData title={page.bannerSectionTitle} Banner={page.banner} />
        <MessageInfo />
        <Branding
          data={page}
          showcase={page.brandShowCase}
          fistbutton="Event support"
          fistlink="/eventSupport"
          secondbutton="contact us"
          secondlink="/contact"
        />
        <Testimonials />
      </Layout>
    );
  }
}
