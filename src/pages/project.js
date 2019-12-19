import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Projects from '../components/Projects';

const Project = () => (
  <Layout>
    <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
    <PageHero
      title="SOME OF OUR RECENT
    CAMPAIGNS"
      heading="A look at some of our latest client marketing campaigns."
    />
    <Projects />
  </Layout>
);

export default Project;
