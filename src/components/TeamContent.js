import React from 'react';
import styled from 'styled-components';
import TeamData from './TeamData';

const Section = styled.div`
  background-color: ${props => props.theme.backgroundColor} !important;
`;

class TeamContent extends React.Component {
  render() {
    const { team } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {team.map(item => (
              <div className="column is-one-quarter">
                <TeamData
                  avatar={item.node.image.file.url}
                  name={item.node.name}
                  position={item.node.position}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
  }
}
export default TeamContent;
