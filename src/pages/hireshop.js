import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ShopItems from '../components/ShopItems';

const HireShop = () => (
  <Layout>
    <Seo title="Commbus Team" description="Exhibitiob Bus Hire" />
    <PageHero
      title="HIRE SHOP EVENT EQUIPMENT FOR HIRE"
      heading="Whether you need a one day hire or a longer term hire, we can help. Enquire today."
    />
    <ShopItems />
  </Layout>
);

export default HireShop;
