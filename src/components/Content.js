import React from 'react';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Section = styled.section`
  h1,
  h2,
  h3,
  h4 {
    margin-top: 2.5rem;
    font-family: ${props => props.theme.secondaryFontFamily};
    font-weight: 300;
    :first-child {
      margin-top: 1rem;
    }
}
  }
  p {
    display: block;
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
  b {
    font-weight: 600;
    margin: 1rem 0;
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
