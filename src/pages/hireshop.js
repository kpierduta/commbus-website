import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ShopItems from '../components/ShopItems';

export const Hire = graphql`
  query Hire {
    allContentfulGenericPages(filter: { slug: { eq: "Hire Shop" } }) {
      edges {
        node {
          slug
          seoTitle
          metaDescription
          keywords
          heroTitle
          heroSubtitle
        }
      }
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
      data: { allContentfulGenericPages: Hire },
      data: { allContentfulHireVehicles: data },
    } = this.props;
    return (
      <Layout>
        {Hire.edges.map(value => (
          <div>
            <Seo
              title={value.node.seoTitle}
              description={value.node.metaDescription}
              url={value.node.keywords}
            />
            <PageHero
              title={value.node.heroTitle}
              heading={value.node.heroSubtitle}
            />
          </div>
        ))}
        <ShopItems data={data.edges} />
      </Layout>
    );
  }
}
