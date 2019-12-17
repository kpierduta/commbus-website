import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import FeaturesSubPage from '../components/FeaturesSubPage';
import ProductsData from '../components/ProductsData';
import MessageInfo from '../components/MessageInfo';
import Branding from '../components/Branding';
import Testimonials from '../components/Testimonials';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        contentfulPage {
          title
        }
      }
    `}
    render={data => (
      <Layout>
        <Seo title="News & Updates" />
        <HomeHero
          title={data.contentfulPage.title}
          subtitle="Our Landstage was a concept designed to solve a problem for a client where they needed a safe platform working at height that could be mobile."
          bgImage="/images/landstage/landimage@2x.jpg"
        />
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
    )}
  />
);
