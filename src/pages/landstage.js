import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Features from '../components/Features';
import ProductsData from '../components/ProductsData';
import MessageInfo from '../components/MessageInfo';
import Branding from '../components/Branding';

const Feature = [
  {
    img: '/images/icon/bus-icon@2x.png',
    title: 'Different vehicle options',
    subtitle:
      'For all of your marketing campaign needs, we have double-deck buses, vintage buses, open top bus and supporting vehicles.',
  },
  {
    img: '/images/icon/eye-icon@2x.png',
    title: 'Vehicle branding',
    subtitle:
      'All our fleet can be branded. From simple graphics to fully wrapped.',
  },
  {
    img: '/images/icon/social-icon@2x.png',
    title: 'Engagement marketing',
    subtitle:
      'An engagement marketing solution that works seamlessly with your other channels of marketing such as social media.',
  },
  {
    img: '/images/icon/thumbs-up-icon@2x.png',
    title: 'Experienced & hard working',
    subtitle:
      'We work 24/7 and not just 9 am - 5 pm to provide the round the clock support for all of our events.',
  },
];

const LandStage = () => {
  return (
    <Layout>
      <Seo title="News & Updates" />
      <HomeHero
        title="LANDSTAGE - 
        BESPOKE EVENT 
        SUPPORT VEHICLE"
        subtitle="Our Landstage was a concept designed to solve a problem for a client where they needed a safe platform working at height that could be mobile."
        bgImage="/images/landstage/landimage@2x.jpg"
      />
      <Features Feature={Feature} />
      <ProductsData />
      <MessageInfo />
      <Branding
        title="INTERNAL & EXTERNAL BRANDING AND DESIGN"
        subtitle="CLIENT EXAMPLES"
        fistbutton="Internal Branding"
        fistlink="/"
        secondbutton="EXternal Branding"
        secondlink="/"
      />
    </Layout>
  );
};

export default LandStage;
