import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import NewsData from '../components/NewsData';

const NewsUpdates = () => {
  return (
    <Layout>
      <Seo title="News & Updates" />
      <PageHero
        title="OUR INTERNAL & EXTERNAL BRANDING OPTIONS"
        heading="Recent work, case studies. marketing insights and business news."
      />
      <NewsData />
    </Layout>
  );
};

export default NewsUpdates;
