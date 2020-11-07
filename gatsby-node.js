const path = require("path");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const component = path.resolve("src/templates/project.js");

  const result = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___index], order: ASC }) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const projects = result.data.allMdx.edges;

  // projects.forEach((post, i) => {
  //   const next = i === projects.length - 1 ? null : projects[i + 1].node;
  //   const previous = i === 0 ? null : projects[i - 1].node;

  //   createPage({
  //     path: post.node.frontmatter.slug,
  //     component,
  //     context: {
  //       slug: post.node.frontmatter.slug,
  //       next,
  //       previous,
  //     },
  //   });
  // });
};

exports.createPages = createPages;
