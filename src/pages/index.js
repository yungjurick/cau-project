import React, { useEffect, useState } from "react";
import { mobileLAbove } from "../styles/mediaQuery";
import styled, { css } from "styled-components";
import Img from "gatsby-image";

import SEO from "../components/seo";
import { graphql, Link, useStaticQuery } from "gatsby";
import Canvas from "../components/canvas";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      doorClosed: file(relativePath: { eq: "door-closed.png" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doorHand: file(relativePath: { eq: "door-hand.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileWithBg: file(relativePath: { eq: "mobile/main-with-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      title: file(relativePath: { eq: "pre-open-title.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arrow: file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileMainBg: file(relativePath: { eq: "mobile/mobile-bg-main.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bg: file(relativePath: { eq: "gbg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2580) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [right, setRight] = useState(30);
  const [bottom, setBottom] = useState(39);

  useEffect(() => {
    const handleResizeBg = () => {
      const gridSize = 60;
      const rightPos = window.innerWidth;
      const bottomPos = window.innerHeight - 7;

      if (rightPos % gridSize < gridSize) {
        setRight((rightPos % gridSize) + gridSize);
      }
      if (bottomPos % gridSize < gridSize) {
        setBottom(bottomPos % gridSize);
      }
    };

    handleResizeBg();

    window.addEventListener("resize", handleResizeBg);
    return () => window.removeEventListener("reisze", handleResizeBg);
  }, []);

  return (
    <Wrapper>
      <SEO />
      <DesktopBgImage />
      <WhiteBg>
        <Title>
          CAU Creative Housing & Interior Design
          <br /> 16th Graduation exhibition
        </Title>
      </WhiteBg>
      <Cover>
        <WrapCanvas>
          <Canvas />
          <ImgWrap isMobile>
            <Img
              imgStyle={{ objectFit: "contain" }}
              fluid={data.mobileWithBg.childImageSharp.fluid}
            />
          </ImgWrap>
          <ImgWrap>
            <Img
              imgStyle={{ objectFit: "contain" }}
              fluid={data.doorClosed.childImageSharp.fluid}
            />
          </ImgWrap>
          <PseudoButtonD to="/projects/" />
          <CursorDesktopPointer>
            <Img
              imgStyle={{ objectFit: "contain" }}
              fluid={data.arrow.childImageSharp.fluid}
            />
          </CursorDesktopPointer>
        </WrapCanvas>
        <Wrap ismobile>
          <Img
            imgStyle={{ objectFit: "contain" }}
            fluid={data.mobileMainBg.childImageSharp.fluid}
          />
          <PseudoButton to="/projects/" />
          <CursorPointer>
            <Img
              imgStyle={{ objectFit: "contain" }}
              fluid={data.arrow.childImageSharp.fluid}
            />
          </CursorPointer>
        </Wrap>
      </Cover>
      <Bg
        className="bgBox"
        style={{ right: `${right}px`, bottom: `${bottom}px` }}
      >
        <DesktopCover>
          <Img
            imgStyle={{ objectFit: "contain" }}
            fluid={data.logo.childImageSharp.fluid}
          />
        </DesktopCover>
      </Bg>
    </Wrapper>
  );
};

const animation = css`
  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const Bg = styled.div`
  position: absolute;
  width: 118px;
  height: 58px;
  background: #fff;
  display: none;
  justify-content: center;
  align-items: center;
  ${mobileLAbove`
    display: flex;
  `}
`;

const DesktopCover = styled.div`
  width: 100%;
  max-width: 65px;
  margin: 0;
  display: none;
  ${mobileLAbove`
    display: block;
  `}
`;

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
  background-size: 60px 60px;
  background-image: linear-gradient(to right, #0029f5 1px, transparent 2px),
    linear-gradient(to bottom, #0029f5 1px, transparent 2px);
  background-repeat: repeat;
  ${mobileLAbove`display:block;`}
`;

const Wrap = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  ${mobileLAbove`display: none;`}
`;

const PseudoButton = styled(Link)`
  position: absolute;
  top: 41%;
  left: 10%;
  width: 25%;
  height: 7%;
  cursor: pointer;
`;

const PseudoButtonD = styled(Link)`
  position: absolute;
  top: 51%;
  left: 8%;
  width: 22%;
  height: 9%;
  cursor: pointer;
  z-index: 99;
`;

const CursorPointer = styled.div`
  position: absolute;
  width: 4%;
  top: 49%;
  left: 17%;
  ${animation};

  animation-name: blink;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 0.8s;
`;

const CursorDesktopPointer = styled.div`
  position: absolute;
  width: 4%;
  top: 63%;
  left: 13%;
  ${animation};
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 0.8s;
`;

const Cover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  justify-content: center;
  align-items: flex-start;
  ${mobileLAbove`align-items: center;`}
`;

const WrapCanvas = styled.div`
  position: absolute;
  max-width: 100%;
  width: 100%;
  margin-top: 2rem;
  display: none;
  ${mobileLAbove`
    display: block;
    top: 189px;
    width: calc(100vh * 0.6);
    max-width: 526.2px;
    margin-top: 0;
  `}
  ${props => (props.isMobile ? `margin-top: 2rem;` : `margin-top: 0;`)}
`;

const ImgWrap = styled.div`
  ${props => (props.isMobile ? `display: block;` : `display: none;`)}
  ${props =>
    mobileLAbove`${props.isMobile ? "display: none;" : "display: block;"}`}
`;

const WhiteBg = styled.div`
  position: absolute;
  top: 69px;
  left: 62px;
  width: 598px;
  height: 118px;
  background: #fff;
  display: none;
  ${mobileLAbove`display: block;`}
`;

const Title = styled.h1`
  width: 100%;
  height: 100%;
  background: #fff;
  font-size: 2.1rem;
  font-weight: 700;
  white-space: nowrap;
  display: none;
  ${mobileLAbove`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export default IndexPage;
