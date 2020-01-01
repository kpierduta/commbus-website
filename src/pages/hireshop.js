import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ShopItems from '../components/ShopItems';

export const Hire = graphql`
  query Hire {
    contentfulHireShopPage {
      title
      subtitle
    }
    allContentfulHireVechicles {
      edges {
        node {
          title
          image {
            t
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
      data: { allContentfulHireVechicles: data },
    } = this.props;
    return (
      <Layout>
        <Seo title="Commbus Team" description="Exhibitiob Bus Hire" />
        <PageHero title={Hire.title} heading={Hire.subtitle} />
        <ShopItems data={data.edges} />
      </Layout>
    );
  }
}
