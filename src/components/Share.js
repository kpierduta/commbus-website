import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from 'react-share';

const Section = styled.section`
  padding: 1rem 1.5rem;
  background: ${props => props.theme.mainBrandColor};
  .icon {
    font-size: 2rem;
    padding-top: 1.5rem;
    margin-left: 2rem;
  }
`;

const Share = ({ url, title }) => (
  <Section className="section">
    <div className="container">
      <h4 className="title is-4 has-text-white has-text-weight-medium is-inline">
        SHARE OUR ARTICLE
      </h4>
      <WhatsappShareButton url={url} quote={title} hashtag="#commbus">
        <span className="icon has-text-white">
          <i className="fab fa-whatsapp" />
        </span>
      </WhatsappShareButton>
      <LinkedinShareButton url={url} quote={title} hashtag="#commbus">
        <span className="icon has-text-white">
          <i className="fab fa-linkedin-in" />
        </span>
      </LinkedinShareButton>
      <FacebookShareButton url={url} quote={title} hashtag="#commbus">
        <span className="icon has-text-white">
          <i className="fab fa-facebook-square" />
        </span>
      </FacebookShareButton>
      <TwitterShareButton url={url} quote={title} hashtag="#commbus">
        <span className="icon has-text-white">
          <i className="fab fa-twitter" />
        </span>
      </TwitterShareButton>
    </div>
  </Section>
);

export default Share;
