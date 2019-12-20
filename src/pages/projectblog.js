import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Share from '../components/Share';
import ProjectContent from '../components/ProjectConetnt';

const NewsBlog = () => (
  <Layout>
    <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
    <HomeHero
      title="PROJECT:Staffordshire university"
      heading="    "
      subtitle="We have been proud to work with Staffordshire University for 4 connective years.In year 1 we were commissioned for the Great Minds Bus Tour: Your Future where our bus travelled to schools across the Midlands to give year 12 students an immersive and interactive glimpse into their future."
      bgImage="/images/projects/blog-image@2x.png"
      text=" "
    />
    <Share />
    <ProjectContent />
  </Layout>
);

export default NewsBlog;
