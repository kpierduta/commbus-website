const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            slug
            title
            subtitle
            details {
              details
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
      allContentfulCampaignPage {
        edges {
          node {
            slug
            title
          }
        }
      }
      allContentfulGraphic {
        edges {
          node {
            slug
            title
          }
        }
      }
      allContentfulNews {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  result.data.allContentfulGraphic.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/graphic.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });

  result.data.allContentfulNews.edges.forEach(({ node }) => {
    const pagePath = `news/${node.slug}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/newsblog.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });

  result.data.allContentfulCampaignPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/campaign.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });

  result.data.allContentfulPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/pages.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });
};
