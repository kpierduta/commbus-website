import React from 'react';
import styled from 'styled-components';
import TeamData from './TeamData';

const Section = styled.div`
  background-color: ${props => props.theme.backgroundColor} !important;
`;

const TeamContent = () => (
  <Section className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-one-quarter">
          <TeamData
            avatar="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-330x220.jpg"
            name="Mark Clark"
            position="Managing Director"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-330x220.jpg"
            name="Mark Clark"
            position="Managing Director"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-330x220.jpg"
            name="Mark Clark"
            position="Managing Director"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-330x220.jpg"
            name="Mark Clark"
            position="Managing Director"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-330x220.jpg"
            name="Mark Clark"
            position="Managing Director"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-330x220.jpg"
            name="Mark Clark"
            position="Managing Director"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-330x220.jpg"
            name="Mark Clark"
            position="Managing Director"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-330x220.jpg"
            name="Mark Clark"
            position="Managing Director"
          />
        </div>
      </div>
    </div>
  </Section>
);
export default TeamContent;
