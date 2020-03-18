import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import config from '../utils/config';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import OurClient from '../components/OurClient';
import Features from '../components/Features';
import Projects from '../components/Projects';
import Campaign from '../components/Campaign';
import Testimonials from '../components/Testimonials';
import ImageModal from '../components/ImageModal';

const Section = styled.div`
  h1,
  h2 {
    font-family: 'BebasNeueRegular' !important;
    line-height: 0.5rem;
    letter-spacing: 2px;
  }
`;

export const homeQuery = graphql`
  query homepage {
    contentfulHomePage {
      seoTitle
      metaDescription
      keywords
      title
      subtitle
      text
      details {
        details
      }
      heroImage {
        file {
          url
        }
      }
      mobileHeroImage {
        file {
          url
        }
      }
      ourClients {
        title
        file {
          url
        }
      }
      featureSectionTitle
      iconOne {
        file {
          url
        }
      }
      featureOneTitle
      featureOneSubtitle
      iconTwo {
        file {
          url
        }
      }
      featureTwoTitle
      featureTwoSubtitle
      iconThird {
        file {
          url
        }
      }
      featureThirdTitle
      featureThirdSubtitle
      iconFour {
        file {
          url
        }
      }
      featureFourTitle
      featureFourSubtitle
      projectReference {
        order
        slug
        projectSizeIsHalf
        projectImage {
          title
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
        shortDescription {
          shortDescription
        }
      }
      sectionTitle
      blogReference {
        slug
        title
        smallImage {
          file {
            url
          }
        }
      }
      testimonialsReference {
        clientLogo {
          title
          file {
            url
          }
        }
        image {
          file {
            url
          }
        }
        description {
          description
        }
        name
      }
    }
  }
`;

export default class IndexPage extends React.Component {
  render() {
    const {
      data: { contentfulHomePage: page },
    } = this.props;
    return (
      <Section>
        <Layout>
          <Seo
            title={page.seoTitle}
            description={page.metaDescription}
            keywords={page.keywords}
            url={`${config.siteUrl}`}
          />
          <HomeHero
            title={page.title}
            heading={page.subtitle}
            subtitle={page.details.details}
            bgImage={page.heroImage.file.url}
            mobileImage={page.mobileHeroImage.file.url}
            text={page.text}
          />
          <ImageModal />
          <OurClient logo={page.ourClients} />
          <Features Feature={page} />
          <Projects reference={page.projectReference} />
          <Campaign data={page} blog={page.blogReference} />
          <Testimonials data={page.testimonialsReference}/>
        </Layout>
      </Section>
    );
  }
}
