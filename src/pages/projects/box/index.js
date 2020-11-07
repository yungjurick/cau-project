import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import MainLayout from "../../../components/mainLayout";

import { sel, go, mapL, takeAll } from "fxjs";
import Projects from "../../../components/projects";

export default function BoxPage({ data }) {
  const projects = go(
    sel("allMdx.edges", data),
    mapL(sel("node.frontmatter")),
    mapL(d => ({ ...d, thumbnail: sel("thumbnail.childImageSharp.fluid", d) })),
    takeAll
  );

  return (
    <Layout>
      <MainLayout>
        <Projects projects={projects} />
      </MainLayout>
    </Layout>
  );
}

export const boxPageQuery = graphql`
  query BoxPageQuery {
    allMdx(
      sort: { fields: [frontmatter___index] }
      filter: { frontmatter: { project: { eq: "box" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            index
            title
            teamname
            people
            slug
            project
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
