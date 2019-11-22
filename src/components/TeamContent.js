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
            avatar="/images/teamimages/mark-clarke@2x.jpg"
            name="Mark Clark"
            position="Managing Director"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="/images/teamimages/gordon-hunt@2x.jpg"
            name="Gordon Hunt"
            position="Director"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="/images/teamimages/clare-macleod@2x.png"
            name="Clare Macleod"
            position="Sales & Marketing Director"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="/images/teamimages/richard-charnley@2x.jpg"
            name="Richard Charnley"
            position="Transport Consultant"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="/images/teamimages/brodie-staro@2x.jpg"
            name="Brodie Setaro"
            position="Transport & Project Manager"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="/images/teamimages/mark-clarke@2x.jpg"
            name="Holly Hitchinson"
            position="Project Manager"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="/images/teamimages/elizabeth-mee@2x.jpg"
            name="Elizabeth Mee"
            position="Business Development "
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="https://bulma.io/images/placeholders/256x256.png"
            name="Ross Thompson"
            position="Logistics & Fleet CoOrdinator"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="https://bulma.io/images/placeholders/256x256.png"
            name="Beth Clarke"
            position="Events Assistant"
          />
        </div>
        <div className="column is-one-quarter">
          <TeamData
            avatar="/images/teamimages/steve-butler@2x.jpg"
            name="Steve Butler"
            position="Mechanic"
          />
        </div>
      </div>
    </div>
  </Section>
);
export default TeamContent;
