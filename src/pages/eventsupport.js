import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Marketing from '../components/Marketing';
import Features from '../components/Features';
import MessageInfo from '../components/MessageInfo';
import Branding from '../components/Branding';
import Testimonials from '../components/Testimonials';

const NavItems = [
  {
    heading: 'BUSINESS TO BUSINESS',
    url: '/images/promotanal/product-showcase-icon@2x.png',
    description:
      'Looking for a direct way to reach your customers, potential customers and resellers? Taking your products and campaign direct to the doorstep of those organisations can give you a great advantage point for selling your products and services directly. Either as a single activity or supporting activity at other trade events with an exhibition bus.',
    link: '/',
  },
  {
    heading: 'BUSINESS TO CONSUMER',
    url: '/images/promotanal/awareness-icon@2x.png',
    description:
      'Are you planning a promo campaign or a product launch where you need to need to reach the right people? No need to wait for your target audience to come to you, take your campaign on the road to them with one of our promotional buses throughout the UK and further afield visiting cities, towns and events.',
    link: '/',
  },
  {
    heading: 'CHARITY, ORGANISATIONS & PUBLIC SECTOR',
    url: '/images/promotanal/microphone-icon@2x.png',
    description:
      'Raising awareness on your issue, campaigning on make changes and fundraising are key objectives for charities. With our cost effective solutions from our pre converted hire fleet of promotional buses we can offer solutions to suit different or your budget allowing to you reach your market more directly.',
    link: '/',
  },
  {
    heading: 'EDUCATION',
    url: '/images/promotanal/be-different-icon@2x.png',
    description:
      'Reaching out to engage with your target audience or providing awareness in as way that is engaging and interactional with one of our promotional buses provides you with a unique tool in a safe environment allowing you reach further to existing and new audiences.',
    link: '/',
  },
];

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

export default class PromotionalBuses extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero
          title="EVENT SUPPORT BUSES & BESPOKE VEHICLES"
          heading="Vehicles, equipment & experienced staff."
          subtitle="Commbus are an experienced event company, creating, supporting and delivering events across the UK. From vehicles, hireable event equipment and our experienced staff."
          bgImage="/images/event/event-support-hero-image@2x.png"
        />
        <Features Feature={Feature} />
        <Marketing
          title="HOW OUR FLEET CAN SUPPORT YOUR EVENT"
          NavItems={NavItems}
        />
        <MessageInfo />
        <Branding
          title="INTERNAL & EXTERNAL BRANDING AND DESIGN"
          subtitle="CLIENT EXAMPLES"
          fistbutton="CONTACT US"
          fistlink="/contact"
          secondbutton="ABOUT"
          secondlink="/team"
        />
        <Testimonials />
      </Layout>
    );
  }
}
