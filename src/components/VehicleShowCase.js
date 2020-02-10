import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';

const Section = styled.section`
  background: #eef3f6;
`;

const VehicleShowCase = ({ data }) => {
  return (
    <Section className="section">
      <div className="container">
        <Heading title="OUR FLEET OF VEhiCLES" />
        <div className="columns is-multiline">
          {data.map(item => (
            <div className="column is-4">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={item.file.url} alt={item.title} />
                  </figure>
                </div>
                <div className="card-content has-text-centered">
                  <p className="subtitle is-6 has-text-weight-semibold has-text-info">
                    {item.description}
                  </p>
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
