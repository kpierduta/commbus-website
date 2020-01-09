import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Content from '../components/Content';

export const policyQuery = graphql`
  query policy {
    allContentfulTermsAndPolicyPage(filter: { page: { eq: "Policy Page" } }) {
      edges {
        node {
          page
          seoTitle
          metaDescription
          keywords
          heroTitle
          heroSubtitle
          content {
            json
          }
        }
      }
    }
  }
`;

export default class Privacy extends React.Component {
  render() {
    const {
      data: { allContentfulTermsAndPolicyPage: page },
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
            <Content data={data.node.content.json} />
          </div>
        ))}
      </Layout>
    );
  }
}
