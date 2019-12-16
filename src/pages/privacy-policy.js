import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';



export default class Privacy extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero
          title="We design, build & manage successful promotional bus campaigns"
          subtitle="“Our promotional buses give meaning to experiential marketing,
        taking your marketing campaigns on the road directly to who
        matters – your target audience”"
          text="- Clare Macleod, Marketing Director"
          bgImage="/images/projects/homepage-header-image@2x.png"
        />
        <OurClient />
        <Features Feature={Feature} />
        <Projects />
        <Campaign />
      </Layout>
    );
  }
}
