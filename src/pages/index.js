import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import OurClient from '../components/OurClient';
import Features from '../components/Features';
import ProjectsRefernce from '../components/ProjectRefernce';
import Campaign from '../components/Campaign';
import Testimonials from '../components/Testimonials';

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
      image {
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
        shortDiscription {
          shortDiscription
        }
      }
      sectionTitle
      blogRefernce {
        slug
        title
        smallImage {
          file {
            url
          }
        }
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
            url={page.keywords}
          />
          <HomeHero
            title={page.title}
            heading={page.subtitle}
            subtitle={page.details.details}
            bgImage={page.image.file.url}
            text={page.text}
          />
          <OurClient logo={page.ourClients} />
          <Features Feature={page} />
          <ProjectsRefernce project={page.projectReference} />
          <Campaign data={page} blog={page.blogRefernce} />
          <Testimonials />
        </Layout>
      </Section>
    );
  }
}
