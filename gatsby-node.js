const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  const result = await graphql(`
    query {
      allContentfulPages {
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
      allContentfulVehicleGraphicBlog {
        edges {
          node {
            slug
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
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulRedirect {
        edges {
          node {
            oldUrl
            newUrl
          }
        }
      }
    }
  `);
  result.data.allContentfulVehicleGraphicBlog.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/graphic.js`),
      context: {
        slug: node.slug,
      },
    });
  });

  result.data.allContentfulProject.edges.forEach(({ node }) => {
    const pagePath = `project/${node.slug}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/projectblog.js`),
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

  result.data.allContentfulPages.edges.forEach(({ node }) => {
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

  result.data.allContentfulRedirect.edges.forEach(({ node }) => {
    createRedirect({
      fromPath: node.newUrl,
      toPath: node.oldUrl,
      isPermanent: true,
      statusCode: 200,
    });
  });
};
