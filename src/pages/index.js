import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import OurClient from '../components/OurClient';
import Features from '../components/Features';
import Projects from '../components/Projects';
import Campaign from '../components/Campaign';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero
          title="We design, build & manage successful promotional bus campaigns"
          subtitle="“Our promotional buses give meaning to experiential marketing,
        taking your marketing campaigns on the road directly to who
        matters – your target audience”"
          text="- Clare Macleod, Marketing Director"
          bgImage="/images/projects/herobackground.png"
        />
        <OurClient />
        <Features />
        <Projects />
        <Campaign />
      </Layout>
    );
  }
}
