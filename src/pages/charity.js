import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import FeaturesSubPage from '../components/FeaturesSubPage';
import Branding from '../components/Branding';
import MessageInfo from '../components/MessageInfo';
import ClientsData from '../components/ClientsData';
import Testimonials from '../components/Testimonials';

export default class Charity extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero
          title="We design, build & manage successful promotional bus campaigns"
          heading="    "
          subtitle="“Our promotional buses give meaning to experiential marketing,
        taking your marketing campaigns on the road directly to who
        matters – your target audience”"
          bgImage="/images/projects/homepage-header-image@2x.png"
        />
        <FeaturesSubPage />
        <Branding
          title="INTERNAL & EXTERNAL BRANDING AND DESIGN"
          subtitle="CLIENT EXAMPLES"
          fistbutton="CONTACT US"
          fistlink="/contact"
          secondbutton="ABOUT"
          secondlink="/team"
        />
        <MessageInfo />
        <ClientsData />
        <Testimonials />
      </Layout>
    );
  }
}
