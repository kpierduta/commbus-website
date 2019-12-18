import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  h1 {
    margin-top: 1.25rem;
  }
`;

const ProjectContent = () => (
  <Section className="section">
    <div className="container">
      <p className="has-text-weight-light is-size-6">
        We recently read an article by Marketing week on “is brand engagement a
        meaningless metric” that said that “four out of five marketers use
        ‘engagement’ as a metric to prove return on investment” but that the
        term brand engagement itself was a misunderstood term across the
        industry so in this blog we talk about how running a marketing campaign
        on a promotional bus can be measured to make the term engagement have
        meaning with data.
      </p>
      <h1 className="title is-4 has-text-weight-light is-uppercase has-text-info">
        Using hashtags to measure engagement
      </h1>
      <p className="has-text-weight-light is-size-6">
        Creating a hashtag for your campaign is one indicator that can show the
        amount of people interacting with your brand during its roadshow
        campaign. We have seen some brands create competitions, polls &
        questions, prizes for feedback in a bid to get everyone on board
        engaging with the brand online.
      </p>
      <h1 className="title is-4 has-text-weight-light is-uppercase has-text-info">
        Using discounts to measure product sales
      </h1>
      <p className="has-text-weight-light is-size-6">
        If your brand is doing a product awareness campaign for a brand new
        product for the market then data can be measured by giving customers a
        special discount that can track the amount of sales derived as a result
        of the promotional bus campaign.
      </p>
      <p className="has-text-weight-light is-size-6">
        Collecting reviews from these type of activities is also a lot easier
        when you are face to face withyour customers, not only do these reviews
        tell you what you audience are thinking, you can track the interaction
        from your campaign and we all know people look to reviews before
        purchasing so this also supports the wider sales process that is trying
        to get every customer to the next step of the customer buying journey.
      </p>
      <h1 className="title is-4 has-text-weight-light is-uppercase has-text-info">
        Creating campaign specific URLs & QR codes to track interaction
      </h1>
      <p className="has-text-weight-light is-size-6">
        When using printed material it can be a little more difficult to track
        how effective it is. However, there are ways that can help you get data
        from your printed marketing investments. Giving your printed material a
        QR code that sends customers to a specific URL allows you to track and
        measure how many people followed the link. You can then work out a
        percentage of people that got onto the next part of the sales funnel
        from how many leaflets you gave out during the roadshow campaign.
      </p>
    </div>
  </Section>
);

export default ProjectContent;
