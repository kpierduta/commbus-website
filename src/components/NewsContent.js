import React from 'react';
import styled from 'styled-components';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getRichTextEntityLinks } from '@contentful/rich-text-links';

const Section = styled.section`
  h1 {
    margin-top: 1.25rem;
  }
`;

class NewsContent extends React.Component {
  render() {
    const { data } = this.props;

    const document = data;

    const Bold = ({ children }) => <p className="bold">{children}</p>;

    const HEADINGONE = ({ children }) => (
      <h1 className="title is-3 has-text-weight-light">{children}</h1>
    );
    const HEADINGTWO = ({ children }) => (
      <h1 className="title is-4 has-text-weight-light">{children}</h1>
    );
    const HEADINGTHREE = ({ children }) => (
      <h1 className="title is-5 has-text-weight-light">{children}</h1>
    );

    const TEXT = ({ children }) => (
      <p className="has-text-weight-light is-size-6">{children}</p>
    );

    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => (
          <HEADINGONE>{children}</HEADINGONE>
        ),
        [BLOCKS.HEADING_2]: (node, children) => (
          <HEADINGTWO>{children}</HEADINGTWO>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
          <HEADINGTHREE>{children}</HEADINGTHREE>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => <TEXT>{children}</TEXT>,
        // [BLOCKS.EMBEDDED_ASSET]: node => {
        //   const { title, description, file } = node.data.target.fields;
        //   const mimeType = file['en-US'].contentType;
        //   const mimeGroup = mimeType.split('/')[0];

        //   switch (mimeGroup) {
        //     case 'image':
        //       return (
        //         <img
        //           title={title ? title['en-US'] : null}
        //           alt={description ? description['en-US'] : null}
        //           src={file['en-US'].url}
        //         />
        //       );
        //     case 'application':
        //       return (
        //         <a
        //           alt={description ? description['en-US'] : null}
        //           href={file['en-US'].url}
        //         >
        //           {title ? title['en-US'] : file['en-US'].details.fileName}
        //         </a>
        //       );
        //     default:
        //       return (
        //         <span style={{ backgroundColor: 'red', color: 'white' }}>
        //           {' '}
        //           {mimeType} embedded asset{' '}
        //         </span>
        //       );
        //   }
        // },
        // [BLOCKS.EMBEDDED_ENTRY]: node => {
        //   const fields = node.data.target.fields;
        //   switch (node.data.target.sys.contentType.sys.id) {
        //     case 'blockquote':
        //       return (
        //         <div>
        //           <BlockQuote
        //             quoteText={fields.quoteText['en-US']}
        //             quoter={fields.quoter['en-US']}
        //           />
        //         </div>
        //       );
        //     default:
        //       return <div>{title} </div>;
        //   }
        // },
      },
      renderText: text => text.replace('!', '?'),
    };

    return (
      <Section className="section">
        <div className="container">
          {documentToReactComponents(document, options)}
        </div>
      </Section>
    );
  }
}

export default NewsContent;
