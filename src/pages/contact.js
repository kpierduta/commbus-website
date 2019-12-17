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
          // heading="Whether you need a one day hire or a longer term hire, we can help. Enquire today."
        />
        <Address />
      </Layout>
    );
  }
}
