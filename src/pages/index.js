import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import OurClient from '../components/OurClient';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HomeHero />
        <OurClient />
        <Projects />
        <Contact />
      </Layout>
    );
  }
}
