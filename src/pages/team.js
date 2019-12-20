import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import TeamContent from '../components/TeamContent';
import Testimonials from '../components/Testimonials';

const Team = () => (
  <Layout>
    <Seo title="Commbus Team" description="Exhibitiob Bus Hire" />
    <HomeHero
      title="Meet the team"
      heading="Mark is one of the founding Directors at Commbus and has been the driving force behind Commbus, working closely with the team over the years to develop Commbus into the business it is today."
      subtitle=" Our experienced team have worked on events accross the UK, working on projects from concept right through to on the road. We have dedicated team who give 24/7 support to our customers."
      bgImage="/images/teamimages/main-hero-image@2x.png"
      text=" "
    />
    <TeamContent />
    <Testimonials />
  </Layout>
);

export default Team;
