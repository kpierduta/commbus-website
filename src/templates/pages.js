import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import FeaturesSubPage from '../components/FeaturesSubPage';
import Banner from '../components/Banner';
import MessageInfo from '../components/MessageInfo';
import Branding from '../components/Branding';
import Testimonials from '../components/Testimonials';

export const pageQuery = graphql`
  query Page($slug: String) {
    contentfulPages(slug: { eq: $slug }) {
      seoTitle
      metaDescription
      keywords
      title
      subtitle
      details {
        details
      }
      image {
        file {
          url
        }
      }
      featureSectionTitle
      featureOneTitle
      featureOneSubtitle
      iconOne {
        file {
          url
        }
      }
      featureTwoTitle
      featureTwoSubtitle
      iconTwo {
        file {
          url
        }
      }
      featureThirdTitle
      featureThirdSubtitle
      iconThird {
        file {
          url
        }
      }
      featureFourTitle
      featureFourSubtitle
      iconFour {
        file {
          url
        }
      }
      bannerTitle
      bannerImages {
        file {
          url
        }
      }
      sectionTitle
      sectionSubtitle
      brandShowCase {
        image {
          title
          file {
            url
          }
        }
        title
        firstPoint
        secondPoint
        thirdPoint
      }
    }
  }
`;

export default class pages extends React.Component {
  render() {
    const {
      data: { contentfulPages: page },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          url={page.keywords}
        />
        <HomeHero
          title={page.title}
          heading={page.subtitle}
          subtitle={page.details.details}
          bgImage={page.image.file.url}
          text=" "
        />
        <FeaturesSubPage data={page} />
        <Banner data={page} />
        <MessageInfo />
        <Branding
          data={page}
          showcase={page.brandShowCase}
          fistbutton="Event support"
          fistlink="/eventSupport"
          secondbutton="contact us"
          secondlink="/contact"
        />
        <Testimonials />
      </Layout>
    );
  }
}
