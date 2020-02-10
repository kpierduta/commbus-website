import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Address from '../components/Address';

export const contactQuery = graphql`
  query contactus {
    contentfulGenericPages(slug: { eq: "Contact" }) {
      slug
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
      data: { contentfulGenericPages: page },
    } = this.props;
    return (
      <Layout hasSubChild>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          url={page.keywords}
        />
        <PageHero title={page.heroTitle} heading={page.heroSubtitle} />
        <Address />
      </Layout>
    );
  }
}
