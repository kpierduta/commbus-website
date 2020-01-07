import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  img {
    width: 100%;
    height: 20rem;
  }
`;

class ProjectPictures extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="columns">
            {data.map(item => (
              <div
                className={item.imageSizeHalf ? 'column is-6' : 'column is-3'}
              >
                <img src={item.image.file.url} alt={item.image.title} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
  }
}

export default ProjectPictures;
