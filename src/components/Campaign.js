import React from 'react';
import styled from 'styled-components';

import CampaignItem from './CampaignItem';
import Button from './elements/Button';
import Heading from './elements/Heading';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundColor};
  h1 {
    margin: 3rem 0 3rem 0;
  }
`;

const ButtonWrapper = styled.div`
  justify-content: center;
  padding: 3rem 0 3rem;
`;

class Campaign extends React.Component {
  render() {
    const { data } = this.props;
    const { blog } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <Heading title={data.sectionTitle} />
          <div className="columns">
            {blog.map(item => (
              <CampaignItem
                title={item.title}
                image={item.smallImage.file.url}
                alt={item.smallImage.title}
                to={`/news/${item.slug}`}
              />
            ))}
          </div>
          <ButtonWrapper className="is-flex">
            <Button background="transparent" to="/news">
              VIEW ALL ARTICLES
            </Button>
          </ButtonWrapper>
        </div>
      </Section>
    );
  }
}

export default Campaign;
