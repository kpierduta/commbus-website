import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import TestimonialItem from './TestimonialItem';
import Heading from './elements/Heading';

const Section = styled.section`
  h1 {
    margin: 3rem 0 3rem 0;
    margin-bottom: 3rem;
  }
`;

export const testimonialQuery = graphql`
  query testimonial {
    allContentfulTestimonials {
      edges {
        node {
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
  }
`;

const Testimonials = () => (
  <Section className="section">
    <div className="container">
      <Heading title="TESTIMONIALS" color="#000" />
      <div className="columns">
        <StaticQuery
          query={testimonialQuery}
          render={data => {
            const { allContentfulTestimonials: content } = data;
            return (
              <>
                {content.edges.map(item => (
                  <TestimonialItem item={item.node} />
                ))}
              </>
            );
          }}
        />
      </div>
    </div>
  </Section>
);

export default Testimonials;
