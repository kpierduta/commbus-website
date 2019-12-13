import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Marketing from '../components/Marketing';
import Features from '../components/Features';
import MessageInfo from '../components/MessageInfo';

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

export default class PromotionalBuses extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero
          title="PROMOTIONAL 
          BRANDED BUSES"
          heading="Double deck buses, open top and single deck coaches. "
          subtitle="Commbus has a fleet of promotional buses for hire and buy (for longer term projects) so if you are looking for a creative solution that will give you 
          great impact - a branded bus is very hard to miss."
          bgImage="/images/promotanal/promo-bus-hero-image@2x.png"
        />
        <Features />
        <Marketing NavItems={NavItems} />
        <MessageInfo />
      </Layout>
    );
  }
}
