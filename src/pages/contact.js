import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Address from '../components/Address';

export const contactQuery = graphql`
  query contactus {
    contentfulContactPage {
      seoTitle
      metaDescription
      keywords
      heroTitle
      heroSubtitle
    }
  }
`;

export default class ContactPage extends React.Component {
  render() {
    const {
      data: { contentfulContactPage: page },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          keywords={page.keywords}
        />
        <PageHero title={page.heroTitle} heading={page.heroSubtitle} />
        <Address />
      </Layout>
    );
  }
}
