import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ShopItems from '../components/ShopItems';

export const Hire = graphql`
  query Hire {
    contentfulHireShopPage {
      seoTitle
      metaDescription
      keyword
      title
      subtitle
    }
    allContentfulHireVehicles {
      edges {
        node {
          title
          image {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default class HireShop extends React.Component {
  render() {
    const {
      data: { contentfulHireShopPage: Hire },
      data: { allContentfulHireVehicles: data },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={Hire.seoTitle}
          description={Hire.metaDescription}
          keywords={Hire.keyword}
        />
        <PageHero title={Hire.title} heading={Hire.subtitle} />
        <ShopItems data={data.edges} />
      </Layout>
    );
  }
}
