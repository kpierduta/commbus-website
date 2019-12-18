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
    }
  `);
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
