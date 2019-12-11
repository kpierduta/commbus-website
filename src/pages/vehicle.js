import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import VechicleBranding from '../components/VechicleBranding';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <PageHero
          title="OUR INTERNAL & EXTERNAL BRANDING OPTIONS"
          heading="We have a range of options for our external and internal branding to suit your campaign."
        />
        <VechicleBranding
          title="BANNER 
          GRAPHICS"
          subtitle="The light grey base colour of our fleet with tinted windows provides an ideal base for your external graphics."
          bgImage="/images/vehcilebarding/banner-image@2x.png"
        />
        <VechicleBranding
          title="OVERLAY 
          GRAPHICS"
          subtitle="You are not constrained to sticking to traditional T-bar banners or pushed into a full wrap.
          Get creative and make your graphics and message make an impact with your audience.
          "
          bgImage="/images/vehcilebarding/overlay-image@3x.png"
        />
        <VechicleBranding
          title="full
          wrap"
          subtitle="Our fully wrapped buses are the largest moving advertising fomat available and are the ultimate branding statement.
          Get creative with over 40m2 of mobile advertising space.
          "
          bgImage="/images/vehcilebarding/full-wrap-image@3x.png"
        />
      </Layout>
    );
  }
}
