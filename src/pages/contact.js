import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Address from '../components/Address';

export const contactQuery = graphql`
  query contactus {
    allContentfulGenericPages(filter: { slug: { eq: "Contact" } }) {
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
  }
`;

export default class ContactPage extends React.Component {
  render() {
    const {
      data: { allContentfulGenericPages: page },
    } = this.props;
    return (
      <Layout>
        {page.edges.map(data => (
          <div>
            <Seo
              title={data.node.seoTitle}
              description={data.node.metaDescription}
              url={data.node.keywords}
            />
            <PageHero
              title={data.node.heroTitle}
              heading={data.node.heroSubtitle}
            />
          </div>
        ))}
        <Address />
      </Layout>
    );
  }
}
