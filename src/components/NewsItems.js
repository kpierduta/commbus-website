import React from 'react';

import styled from 'styled-components';

const Section = styled.div``;

const NewsItems = ({ logo }) => {
  return (
    <Section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <figure className="image is-48x48">
            <img src={logo} alt="" />
          </figure>
        </div>
      </div>
    </Section>
  );
};

export default NewsItems;
