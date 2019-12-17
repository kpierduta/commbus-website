import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Address from '../components/Address';
import MyMapComponent from '../components/GoogleMap';

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <PageHero
          title="Contact us"
          heading="We aim to reply to your enquiry within 2 working days."
        />
        <Address />
      </Layout>
    );
  }
}
