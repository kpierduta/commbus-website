import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import VechicleExternal from '../components/VechicleExternal';
import VechicleInternal from '../components/VechicleInternal';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <PageHero
          title="OUR INTERNAL & EXTERNAL BRANDING OPTIONS"
          heading="We have a range of options for our external and internal branding to suit your campaign."
        />
        <VechicleExternal />
        <VechicleInternal />
      </Layout>
    );
  }
}
