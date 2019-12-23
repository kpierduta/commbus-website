import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import OurClient from '../components/OurClient';
import Features from '../components/Features';
import Projects from '../components/Projects';
import Campaign from '../components/Campaign';
import Testimonials from '../components/Testimonials';

export const projectQuery = graphql`
  query projectindex {
    allContentfulProject(sort: { fields: order }) {
      edges {
        node {
          order
          slug
          projectSizeIsHalf
          projectImage {
            file {
              url
            }
          }
          icon {
            file {
              url
            }
          }
          category
          title
          shortDiscription {
            shortDiscription
          }
        }
      }
    }
  }
`;

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
    img: '/images/icon/shopping-icon@2x.png',
    title: 'Hire shop',
    subtitle:
      'We have a wide range of equipment to support event. Find our more in our hire shop.',
  },
  {
    img: '/images/icon/thumbs-up-icon@2x.png',
    title: 'Experienced & hard working',
    subtitle:
      'We work 24/7 and not just 9 am - 5 pm to provide the round the clock support for all of our events.',
  },
];

export default class IndexPage extends React.Component {
  render() {
    const {
      data: { allContentfulProject: project },
    } = this.props;
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero
          title="We design, build & manage successful promotional bus campaigns"
          heading="    "
          subtitle="“Our promotional buses give meaning to experiential marketing,
        taking your marketing campaigns on the road directly to who
        matters – your target audience”"
          text="- Clare Macleod, Marketing Director"
          bgImage="/images/projects/homepage-header-image@2x.png"
        />
        <OurClient />
        <Features Feature={Feature} />
        <Projects project={project.edges} />
        <Campaign />
        <Testimonials />
      </Layout>
    );
  }
}
