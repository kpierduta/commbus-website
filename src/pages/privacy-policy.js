import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Content from '../components/Content';

const ContentWrapper = styled.div``;

export const policyQuery = graphql`
  query policy {
    contentfulTermsAndPolicyPage(page: { eq: "Policy Page" }) {
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
`;

export default class Privacy extends React.Component {
  render() {
    const {
      data: { contentfulTermsAndPolicyPage: page },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          url={page.keywords}
        />
        <PageHero title={page.heroTitle} heading={page.heroSubtitle} />
        <ContentWrapper>
          <Content data={page.content.json} />
        </ContentWrapper>
      </Layout>
    );
  }
}
