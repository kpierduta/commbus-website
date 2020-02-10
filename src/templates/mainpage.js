import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import Marketing from '../components/Marketing';
import VehicleShowCase from '../components/VehicleShowCase';
import Features from '../components/Features';
import MessageInfo from '../components/MessageInfo';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

export const MainPageQuery = graphql`
  query MainPage($slug: String) {
    contentfulMainPages(slug: { eq: $slug }) {
      slug
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
      featureSectionTitle
      iconOne {
        title
        file {
          url
        }
      }
      featureOneTitle
      featureOneSubtitle
      iconTwo {
        title
        file {
          url
        }
      }
      featureTwoTitle
      featureTwoSubtitle
      iconThird {
        title
        file {
          url
        }
      }
      featureThirdTitle
      featureThirdSubtitle
      iconFour {
        title
        file {
          url
        }
      }
      featureFourTitle
      featureFourSubtitle
      vehicleShowCase {
        description
        file {
          url
        }
      }
      campaignSectionTitle
      campaignFirstIcon {
        title
        file {
          url
        }
      }
      campaignFirstTitle
      campaignFirstSubtitle {
        campaignFirstSubtitle
      }
      campaignSecondIcon {
        title
        file {
          url
        }
      }
      campaignSecondTitle
      campaignSecondSubtitle {
        campaignSecondSubtitle
      }
      campaignThirdIcon {
        title
        file {
          url
        }
      }
      campaignThirdTitle
      campaignThirdSubtitle {
        campaignThirdSubtitle
      }
      campaignFourthIcon {
        title
        file {
          url
        }
      }
      campaignFourthTitle
      campaignFourthSubtitle {
        campaignFourthSubtitle
      }
      campaignFirstLink
      campaignSecondLink
      campaignThirdLink
      campaignFourthLink
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
    }
  }
`;

const Container = styled.div`
  background-color: ${props => props.theme.borderColor};
  padding: 2.5rem 0rem !important;
  .title {
    margin-bottom: 0rem;
  }
`;

export default class MainPage extends React.Component {
  render() {
    const {
      data: { contentfulMainPages: promotion },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={promotion.seoTitle}
          description={promotion.metaDescription}
          keywords={promotion.keywords}
        />
        <HomeHero
          title={promotion.title}
          heading={promotion.subtitle}
          subtitle={promotion.details.details}
          bgImage={promotion.image.file.url}
          text={promotion.text}
        />
        <Features Feature={promotion} />
        <VehicleShowCase data={promotion.vehicleShowCase} />
        <Marketing data={promotion} />
        <Container className="has-text-centered">
          <h1 className="title is-2">SOME OF OUR RECENT CAMAPAIGNS</h1>
          <Projects reference={promotion.projectReference} />
        </Container>
        <MessageInfo />
        <Testimonials />
      </Layout>
    );
  }
}
