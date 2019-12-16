import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import FeaturesSubPage from '../components/FeaturesSubPage';
import ProductsData from '../components/ProductsData';
import MessageInfo from '../components/MessageInfo';
import Branding from '../components/Branding';

const Project = () => (
  <Layout>
    <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
    <HomeHero
      title="PROMOTIONAL BUSES PRODUCT SHOWCASE"
      heading="Giving your product the exposure it deserves"
      subtitle="Having a product launch, sales tour, product demonstration or giving out samples? Our branded buses get your product to your target audiance in the hearts of busy towns and cities"
      bgImage="/images/projects/herobackground.png"
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

export default Project;
