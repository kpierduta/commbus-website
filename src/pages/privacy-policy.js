import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import PolicyContent from '../components/PolicyContent';

export default class Privacy extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <PageHero
          title="HIRE SHOP EVENT EQUIPMENT FOR HIRE"
          heading="Whether you need a one day hire or a longer term hire, we can help. Enquire today."
        />
        <PolicyContent />
      </Layout>
    );
  }
}
