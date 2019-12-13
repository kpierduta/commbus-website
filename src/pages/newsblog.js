import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Share from '../components/Share';
import NewsContent from '../components/NewsContent';

const NewsBlog = () => (
  <Layout>
    <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
    <HomeHero
      title="UNDERSTAND WHY BRAND ENGAGEMENT IS AMPLIFIED WITH A BRANDED BUS"
      subtitle=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.By Clare Macleod"
      bgImage="/images/projects/herobackground.png"
    />
    <Share />
    <NewsContent />
  </Layout>
);

export default NewsBlog;
