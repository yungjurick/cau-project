import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import Img from "gatsby-image";

import SEO from "../../components/seo";
import { laptopAbove, tabletAbove } from "../../styles/mediaQuery";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import { useState } from "react";

// 8, 15, 7
export default function ProjectsPage() {
  const [mouse, setMouse] = useState({});
  const [isIn, setIsIn] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      handle: file(relativePath: { eq: "door-handle-fit.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      box: file(relativePath: { eq: "box.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frame: file(relativePath: { eq: "frame.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arrow: file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const handleMouseMove = e => {
    const targetBoundary = document
      .querySelector("#cursor_cover")
      .getBoundingClientRect().right;

    const avoidBoundaries = document
      .querySelector("#team_cover")
      .getBoundingClientRect();

    if (
      (e.clientX < targetBoundary && e.clientY < avoidBoundaries.top) ||
      (e.clientX < targetBoundary && e.clientY > avoidBoundaries.bottom) ||
      (e.clientX < avoidBoundaries.left &&
        e.clientY > avoidBoundaries.top &&
        e.clientY < avoidBoundaries.bottom)
    ) {
      setIsIn(true);
      setMouse({ x: e.clientX, y: e.clientY });
    } else {
      setIsIn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Wrapper>
      <Inner>
        <SEO />
        <MobileGone>
          <Cursor
            id="cursor_cover"
            style={{ background: "transparent" }}
          ></Cursor>
          <div
            aria-hidden="true"
            tabIndex="-1"
            role="button"
            onClick={() => navigate("/")}
            style={{
              display: "block",
              opacity: isIn ? 1 : 0,
              zIndex: 98,
              width: "40px",
              height: "40px",
              position: "absolute",
              top: `${mouse.y || 0}px`,
              left: `${mouse.x || 0}px`,
              transform: "rotate(-90deg)",
              cursor: "none",
            }}
          >
            <Img
              imgStyle={{ objectFit: "contain" }}
              fluid={data.arrow.childImageSharp.fluid}
            />
          </div>
        </MobileGone>
        <Team id="team_cover">
          <LinkButton to="/projects/handle/" />
          <ImageWrap hasmin>
            <Img
              imgStyle={{ objectFit: "cover" }}
              fluid={data.handle.childImageSharp.fluid}
            />
          </ImageWrap>
          <Info>
            <TeamName>
              <Highlight />
              Handle
            </TeamName>
            <Name>Studio.Kim</Name>
          </Info>
        </Team>
        <Team>
          <LinkButton to="/projects/box/" />
          <ImageWrap>
            <Img
              imgStyle={{ objectFit: "contain" }}
              fluid={data.box.childImageSharp.fluid}
            />
          </ImageWrap>
          <Info>
            <TeamName>
              Box
              <Highlight />
            </TeamName>
            <Name>Studio.Chang</Name>
          </Info>
        </Team>
        <Team>
          <LinkButton to="/projects/frame/" />
          <ImageWrap>
            <Img
              imgStyle={{ objectFit: "contain" }}
              fluid={data.frame.childImageSharp.fluid}
            />
          </ImageWrap>
          <Info>
            <TeamName>
              Frame
              <Highlight />
            </TeamName>
            <Name>Studio.Lee</Name>
          </Info>
        </Team>
      </Inner>
    </Wrapper>
  );
}

const MobileGone = styled.div`
  display: none;
  ${tabletAbove`
    display: block;
  `}
`;

const Cursor = styled.div`
  left: 0;
  top: 0;
  height: 100%;
  width: 300px;
  position: absolute;
  cursor: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  max-width: 1380px;
  margin: auto;
  padding: 2rem;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  ${tabletAbove`
    flex-direction: row;
  `}
`;

const Team = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
  ${tabletAbove`
    width: 33.333%;
    margin-bottom: 0;
  `}
`;

const ImageWrap = styled.div`
  margin: auto;
  padding: 1rem;
  width: 50%;
  ${tabletAbove`
    height: auto;
  `}
  ${props => props.hasmin ? css`
    ${tabletAbove`
      min-width: 200px;
    `}
    ${laptopAbove`
      min-width: 350px;
    `}
  ` : ``}
`;
const Info = styled.div`
  text-align: center;
`;
const TeamName = styled.h3`
  position: relative;
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: 700;
  ${tabletAbove`
    margin-top: 2rem;
    font-size: 3rem;
  `}
`;

const Highlight = styled.span`
  display: block;
  position: absolute;
  bottom: 10px;
  left: 0px;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, yellow 65%);
`;
const Name = styled.p`
  font-size: 1rem;
  font-weight: 300;
  ${tabletAbove`
    font-size: 1.5rem;
  `}
`;

const LinkButton = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
`;
