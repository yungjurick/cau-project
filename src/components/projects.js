import React, { useEffect } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { Link } from "gatsby";
import { mobileLAbove, tabletAbove } from "../styles/mediaQuery";
import { FONT_FAMILY_GOTHIC } from "../styles/scheme";

export default function Projects({ projects = [] }) {
  useEffect(() => {
    document.addEventListener("contextmenu", e => {
      if (e.target.tagName === "A") {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }, []);
  return (
    <Wrapper>
      {projects.map(project => (
        <ImageCover key={project.index}>
          <Img
            imgStyle={{ objectFit: "cover" }}
            fluid={{ ...project.thumbnail, aspectRatio: 1 / 1 }}
          />
          <AbsoluteLink
            to={project.slug}
            teamname={project.title}
            peoplenames={project.people.join(" | ")}
          />
        </ImageCover>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-basis: 100%;
  flex-wrap: wrap;
  margin-right: -15px;
  ${mobileLAbove`
    margin-right: -15px;
  `}
`;

const ImageCover = styled.div`
  position: relative;
  flex-basis: calc(50% - 15px);
  margin-top: 15px;
  margin-right: 15px;
  ${mobileLAbove`
    flex-basis: calc(33.333333% - 15px);
    margin-top: 15px;
    margin-right: 15px;
  `};
`;

const AbsoluteLink = styled(Link)`
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  cursor: pointer;
  font-family: ${FONT_FAMILY_GOTHIC};
  transition: background linear 0.3s;
  :hover {
    background: rgba(0, 0, 0, 0.5);
    ::after {
      content: "${props => props.peoplenames}";
      bottom: 20px;
      left: 0;
      right: 0;
      font-weight: 300;
    }
    ::before {
      text-align: center;
      left: 50%;
      white-space: nowrap;
      transform: translateX(-50%);
      font-weight: 8800;
      content: "${props => props.teamname}";
      bottom: 50px;
      color: #fff;
    }
  }
  ::after,
  ::before {
    text-align: center;
    display: block;
    position: absolute;
    bottom: 0;
    left: 5%;
    margin: auto;
    color: #fff;
    font-family: ${FONT_FAMILY_GOTHIC};
  }
  :after {
    content: none;
    bottom: 5%;
    font-size: 12px;
    ${tabletAbove`
      font-size: 16px;
    `}
  }
  ::before {
    content: none;
    bottom: 4%;
    border-bottom: 2px solid #fff;
    font-size: 16px;
    ${tabletAbove`
      font-size: 1.6rem;
    `}
  }
`;
