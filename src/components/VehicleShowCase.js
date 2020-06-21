import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Heading from './elements/Heading';
import ImageModal from './ImageModal';

const Section = styled.section`
  background: #eef3f6;
  a {
    margin-top: -1.25rem;
  }
`;

const VehicleShowCase = ({ data }) => {
  return (
    <Section className="section">
      <div className="container">
        <Heading title={data.clientSectionTitle} />
        <Heading title={data.clientSectionSubtitle} size="is-6" />

        <div className="columns is-multiline">
          {data.clientExample.map(item => (
            <div className="column is-4 is-flex">
              <div className="card">
                <ImageModal src={item.file.url} alt={item.title} />
                <div className="card-content has-text-centered">
                  <div>
                    <p className="title is-6 has-text-weight-semibold has-text-info">
                      {item.title}
                    </p>
                    {item.title === 'HOSPITALITY ON SITE' ? (
                      <p className="subtitle is-6 has-text-info">
                        <a href="https://www.deckerdence.com" target="_blank">
                          {item.description}
                        </a>
                      </p>
                    ) : (
                      <p className="subtitle is-6 has-text-info">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default VehicleShowCase;
