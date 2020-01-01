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
        <Seo title="News & Updates" />
        <HomeHero
          title={page.title}
          heading={page.subtitle}
          subtitle={page.details.details}
          bgImage={page.image.file.url}
          text=" "
        />
        <FeaturesSubPage />
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
