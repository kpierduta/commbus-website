import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Content from '../components/Content';

export const termsQuery = graphql`
  query terms {
    contentfulTermsAndConditionsPage {
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

export default class Terms extends React.Component {
  render() {
    const {
      data: { contentfulTermsAndConditionsPage: page },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          url={page.keywords}
        />
        <PageHero title={page.heroTitle} heading={page.heroSubtitle} />
        <Content data={page.content.json} />
      </Layout>
    );
  }
}
