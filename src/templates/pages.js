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
    contentfulPage(slug: { eq: $slug }) {
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
    }
  }
`;

export default class page extends React.Component {
  render() {
    const {
      data: { contentfulPage: page },
    } = this.props;
    return (
      <Layout>
        <Seo title="News & Updates" />
        <HomeHero page={page} />
        <FeaturesSubPage />
        <ProductsData title="SOME OF OUR PRODUCT LAUNCH CAMPAIGNS" />
        <MessageInfo />
        <Branding
          title="CONFIGURATION"
          subtitle=" FOR EVENTS ON TIGHT DEADLINES OUR LANDSTAGE CAN BE DRIVEN IN AND OUT WITHIN MINUTES"
          fistbutton="Event support"
          fistlink="/eventsupport"
          secondbutton="contact us"
          secondlink="/contact"
        />
        <Testimonials />
      </Layout>
    );
  }
}
