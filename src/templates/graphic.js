import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import ProductsData from '../components/ProductsData';
import MessageInfo from '../components/MessageInfo';

export const pageQuery = graphql`
  query graphic($slug: String) {
    contentfulGraphic(slug: { eq: $slug }) {
      slug
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

export default class Graphic extends React.Component {
  render() {
    const {
      data: { contentfulGraphic: page },
    } = this.props;
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero page={page} />
        <ProductsData />
        <MessageInfo />
      </Layout>
    );
  }
}
