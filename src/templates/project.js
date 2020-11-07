import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import MainLayout from "../components/mainLayout";
import { mobileLAbove, tabletAbove } from "../styles/mediaQuery";
import { COLORS, FONT_FAMILY_GOTHIC } from "../styles/scheme";
import { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Desc from "../components/desc";
import Video from "../components/video";
import Zoom from "../components/zoom";
import WrapForTeam from "../components/wrapForTeam";
import Gif from "../components/gif";

const shortcodes = { Gif, WrapForTeam, Zoom, Video, Desc, Link };

export default function ProjectTemplate({ data, pageContext }) {
  const post = data.mdx;

  const { previous, next } = pageContext;
  const fm = post.frontmatter;

  const prevSlug = previous?.frontmatter.slug;
  const nextSlug = next?.frontmatter.slug;

  useEffect(() => {
    document.addEventListener("contextmenu", e => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }, []);

  return (
    <Layout>
      <MainLayout>
        <AllCover>
          <ProjectTitle>{fm.projectName}</ProjectTitle>
          <Names>{fm.people.join(" | ")}</Names>
          <MDXProvider images={[1, 2, 3]} components={shortcodes}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
          <Pages>
            <PageButton disabled={!prevSlug} to={prevSlug ? prevSlug : "#"}>
              {"< "}Prev
            </PageButton>
            <PageButton disabled={!nextSlug} to={nextSlug ? nextSlug : "#"}>
              Next{" >"}
            </PageButton>
          </Pages>
        </AllCover>
      </MainLayout>
    </Layout>
  );
}

const ProjectTitle = styled.h1`
  color: #000;
  margin-top: 4rem;
  font-family: ${FONT_FAMILY_GOTHIC};
  font-size: 18px;
  font-weight: 700;
`;

const Names = styled.h3`
  color: #000;
  margin-top: 3rem;
  font-family: ${FONT_FAMILY_GOTHIC};
  font-weight: 700;
  font-size: 14px;
  text-align: end;
`;

const Pages = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
`;

const PageButton = styled(Link)`
  color: ${props => (props.disabled ? "#fff" : COLORS.primary)};
  opacity: ${props => (props.disabled ? 0 : 1)};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.5rem;
`;

const AllCover = styled.div`
  position: relative;
  max-width: 1200px;
  margin: auto;
`;

const MarkdownWrapper = styled.div`
  margin-top: 1rem;
  ${tabletAbove`
    margin-top: 2rem;
  `}
  img {
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #222;
    line-height: 1.8;
  }
  p {
    line-height: 1.6;
    font-size: 1rem;
    ${tabletAbove`
      font-size: 1.125rem;
    `}
  }

  .embedVideo-container {
    max-width: 1440px;
    margin: auto;
  }
`;

export const projectQuery = graphql`
  query ProjectQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        index
        title
        projectName
        teamname
        people
        slug
        project
      }
    }
  }
`;
