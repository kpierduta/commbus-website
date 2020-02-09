import React from 'react';
import styled from 'styled-components';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Section = styled.section`
  h1,
  h2,
  h3,
  h4 {
    margin-top: 1rem;
    font-family: ${props => props.theme.secondaryFontFamily};
    font-weight: 300;
  }
  p {
    margin-top: 1rem;
  }
  h2 {
    font-size: 24px;
  }
  a {
    margin-top: 1rem;
    color: ${props => props.theme.mainBrandColor};
  }
  ul {
    list-style: initial;
  }
`;

class Content extends React.Component {
  render() {
    const { data } = this.props;

    const document = data;
    return (
      <Section className="section">
        <div className="container">{documentToReactComponents(document)}</div>
      </Section>
    );
  }
}

export default Content;
