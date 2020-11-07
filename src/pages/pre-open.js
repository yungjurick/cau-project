import React from "react";
import styled from "styled-components";
import { mobileLAbove } from "../styles/mediaQuery";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site: site {
        siteMetadata {
          title
          description
        }
      }
      mobileBgImage: file(relativePath: { eq: "mobile/main.png" }) {
        childImageSharp {
          fluid(maxWidth: 580) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doorClosed: file(relativePath: { eq: "door-closed.png" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      preOpenTitle: file(relativePath: { eq: "pre-open-title.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      preOpenDesc: file(relativePath: { eq: "pre-open-desc.png" }) {
        childImageSharp {
          fluid(maxWidth: 680) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);



  return (
    <Wrapper>
      <SEO />
      <DesktopBgImage />
      <Cover>
        <div style={{ maxWidth: "100%", width: "560px" }}>
          <Img
            imgStyle={{ objectFit: "contain" }}
            fluid={data.doorClosed.childImageSharp.fluid}
          />
        </div>
      </Cover>
      <Dimmed />
      <MobileCover>
        <Img fluid={data.mobileBgImage.childImageSharp.fluid} />
      </MobileCover>
      <DesktopCover>
        <div style={{ maxWidth: "100%", width: "780px" }}>
          <Img
            imgStyle={{ objectFit: "contain" }}
            fluid={data.preOpenTitle.childImageSharp.fluid}
          />
        </div>
        <div style={{ maxWidth: "100%", width: "680px", marginTop: "4rem" }}>
          <Img
            imgStyle={{ objectFit: "contain" }}
            fluid={data.preOpenDesc.childImageSharp.fluid}
          />
        </div>
      </DesktopCover>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  overflow-y: hidden;
`;

const DesktopBgImage = styled.div`
  display: none;
  position: absolute;
  top: 0.5rem;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 50px 50px;
  background-image: linear-gradient(to right, #0029f5 1px, transparent 1px),
    linear-gradient(to bottom, #0029f5 1px, transparent 1px);
  background-position-x: 25px;
  background-repeat: repeat;
  ${mobileLAbove`display:block;`}
`;

const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  background-color: rgba(255, 255, 255, 0.8);
  display: none;
  ${mobileLAbove`display: block;`}
`;

const MobileCover = styled.div`
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  display: block;
  ${mobileLAbove`
    display: none;
  `}
`;

const DesktopCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 16;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;
  ${mobileLAbove`display: flex;padding: 1rem;`}
`;

const Cover = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  ${mobileLAbove`display: flex;`}
`;
