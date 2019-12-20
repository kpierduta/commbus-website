import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import FeaturesSubPage from '../components/FeaturesSubPage';
import ProductsData from '../components/ProductsData';
import MessageInfo from '../components/MessageInfo';
import Branding from '../components/Branding';

const Location = () => {
  return (
    <Layout>
      <Seo title="News & Updates" />
      <HomeHero
        title="LANDSTAGE - 
        BESPOKE EVENT 
        SUPPORT VEHICLE"
        heading="  "
        subtitle="Our Landstage was a concept designed to solve a problem for a client where they needed a safe platform working at height that could be mobile."
        bgImage="/images/landstage/landimage@2x.jpg"
        text=" "
      />
      <FeaturesSubPage />
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

export default Location;
