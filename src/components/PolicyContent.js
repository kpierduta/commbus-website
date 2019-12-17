import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  h1 {
    margin-top: 1.25rem;
  }
`;

const PolicyContent = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-2 has-text-weight-light is-uppercase">
        YOUR INFORMATION
      </h1>

      <p className="has-text-weight-light is-size-6">
        Commbus is not in the business of selling, renting or trading email
        lists with other companies and businesses for marketing purposes. This
        privacy policy provides you with all of the detail on when and why we
        collect your personal inforation, how we use it, the limited conditions
        under which we may disclose it to others and how we keep it secure.
      </p>
      <h1 cl assName="title is-4 has-text-weight-light is-uppercase">
        HoW we use your data
      </h1>
      <p className="has-text-weight-light is-size-6">
        If your brand is doing a product awareness campaign for a brand new
        product for the market then data can be measured by giving customers a
        special discount that can track the amount of sales derived as a result
        of the promotional bus campaign.
      </p>
      <h1 className="title is-4 has-text-weight-light is-uppercase">
        HoW we use your data
      </h1>
      <p className="has-text-weight-light is-size-6">
        Collecting reviews from these type of activities is also a lot easier
        when you are face to face withyour customers, not only do these reviews
        tell you what you audience are thinking, you can track the interaction
        from your campaign and we all know people look to reviews before
        purchasing so this also supports the wider sales process that is trying
        to get every customer to the next step of the customer buying journey.
      </p>
      <h1 className="title is-4 has-text-weight-light is-uppercase">
        Creating campaign specific URLs & QR codes to track interaction
      </h1>
      <p className="has-text-weight-light is-size-6">
        When using printed material it can be a little more difficult to track
        how effective it is. However, there are ways that can help you get data
        from your printed marketing investments. Giving your printed material a
        QR code that sends customers to a specific URL allows you to track and
        measure how many people followed work out a percentage of people that
        got onto the next part of the sales funnel from how many leaflets you
        gave out during the roadshow campaign.
      </p>
      <Link
        className="subtitle is-6 has-text-weight-light is-uppercase has-text-info"
        to="/"
      >
        Creating campaign
      </Link>
      <Link>
        <h1 className="has-text-weight-light is-uppercase has-text-info">
          Creating campaign
        </h1>
      </Link>

      <h1 className="title is-4 has-text-weight-light is-uppercase">
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
      <h1 className="title is-4 has-text-weight-light is-uppercase">
        Creating campaign specific URLs & QR codes to track interaction
      </h1>
      <p className="has-text-weight-light is-size-6">
        percentage of people that got onto the next part of the sales funnel
        from how many leaflets you gave out during the roadshow campaign.
      </p>
      <p className="has-text-weight-light is-size-6">
        measure how many people followed the link. You can then work out a
        percentage of people that got onto the next part of the sales funnel
        from how many leaflets you gave out during the roadshow campaign.
      </p>
    </div>
  </Section>
);

export default PolicyContent;
