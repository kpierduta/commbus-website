import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Content from '../components/Content';

export const termsQuery = graphql`
  query terms {
    allContentfulTermsAndPolicyPage(
      filter: { page: { eq: "Terms & Condition" } }
    ) {
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

export default class Terms extends React.Component {
  render() {
    const {
      data: { allContentfulTermsAndPolicyPage: page },
    } = this.props;
    return (
      <Layout>
        {page.edges.map(data => (
          <>
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
          </>
        ))}
      </Layout>
    );
  }
}
