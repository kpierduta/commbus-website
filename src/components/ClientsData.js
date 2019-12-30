import React from 'react';
import styled from 'styled-components';

import Clients from './Clients';
import Heading from './elements/Heading';

const Section = styled.div`
  background-color: #f7f7f7;
`;
class ClientsData extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <Heading title={this.props.title} />
          <Heading title={this.props.subtitle} size="is-4" />
          <div className="columns is-multiline">
            {data.map(item => (
              <React.Fragment>
                <Clients
                  avatar={item.internalImage.file.url}
                  alt={item.internalImage.title}
                  title={item.title}
                  subtitle={item.subtitle.subtitle}
                  text="Internally:"
                  para={item.internallyDetails.internallyDetails}
                />
                <Clients
                  avatar={item.externalImage.file.url}
                  alt={item.externalImage.title}
                  title=""
                  subtitle=""
                  text="Externally:"
                  para={item.externalDetails.externalDetails}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </Section>
    );
  }
}

export default ClientsData;
