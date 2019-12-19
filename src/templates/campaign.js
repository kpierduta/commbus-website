import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import FeaturesSubPage from '../components/FeaturesSubPage';
import Branding from '../components/Branding';
import MessageInfo from '../components/MessageInfo';
import ClientsData from '../components/ClientsData';
import Testimonials from '../components/Testimonials';

export const CampaignQuery = graphql`
  query campaign($slug: String) {
    contentfulCampaignPage(slug: { eq: $slug }) {
      slug
      title
    }
  }
`;

export default class Campaign extends React.Component {
  render() {
    const {
      data: { contentfulCampaignPage: campaign },
    } = this.props;
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero
          page={campaign}
          heading="    "
          subtitle="“Our promotional buses give meaning to experiential marketing,
          taking your marketing campaigns on the road directly to who
          matters – your target audience”"
          bgImage="/images/projects/homepage-header-image@2x.png"
        />
        <FeaturesSubPage />
        <Branding
          title="INTERNAL & EXTERNAL BRANDING AND DESIGN"
          subtitle="CLIENT EXAMPLES"
          fistbutton="CONTACT US"
          fistlink="/contact"
          secondbutton="ABOUT"
          secondlink="/team"
        />
        <MessageInfo />
        <ClientsData
          title="INTERNAL & EXTERNAL BRANDING AND DESIGN"
          subtitle="CLIENT EXAMPLES"
        />
        <Testimonials />
      </Layout>
    );
  }
}
