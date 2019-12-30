import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';
import BrandingItem from './BrandingItem';
import Button from './elements/Button';

const Section = styled.section`
  background: #eef3f6;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0rem 4rem 0rem;
  justify-content: center;
  display: grid;
`;

class Branding extends React.Component {
  render() {
    const { data } = this.props;
    const { showcase } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <Heading title={data.sectionTitle} />
          <Heading title={data.sectionSubtitle} size="is-6" />
          <div className="columns is-multiline">
            {showcase.map(item => (
              <BrandingItem
                Image={item.image.file.url}
                alt={item.image.title}
                title={item.title}
                first={item.firstPoint}
                second={item.secondPoint}
                third={item.thirdPoint}
              />
            ))}
          </div>
          <ButtonContainer className="colums">
            <div className="column">
              <div className="buttons">
                <Button
                  width="14rem"
                  background="transparent"
                  link={this.props.fistlink}
                >
                  {this.props.fistbutton}
                </Button>
                <Button
                  width="14rem"
                  background="transparent"
                  link={this.props.secondlink}
                >
                  {this.props.secondbutton}
                </Button>
              </div>
            </div>
          </ButtonContainer>
        </div>
      </Section>
    );
  }
}

export default Branding;
