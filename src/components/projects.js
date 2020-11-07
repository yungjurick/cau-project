import React, { useEffect } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { Link } from "gatsby";
import { mobileLAbove } from "../styles/mediaQuery";
import { FONT_FAMILY } from "../styles/scheme";

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
  margin-right: -20px;
  ${mobileLAbove`
    margin-right: -40px;
  `}
`;

const ImageCover = styled.div`
  position: relative;
  flex-basis: calc(50% - 20px);
  margin-top: 20px;
  margin-right: 20px;
  ${mobileLAbove`
    flex-basis: calc(33.333333% - 40px);
    margin-top: 40px;
    margin-right: 40px;
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
  font-family: ${FONT_FAMILY};
  transition: background linear 0.3s;
  :hover {
    background: rgba(0, 0, 0, 0.5);
    ::after,
    ::before {
      content: "${props => props.teamname}";
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
    font-family: ${FONT_FAMILY};
    font-size: 1.6rem;
  }
  :after {
    content: none;
    bottom: 5%;
  }
  ::before {
    content: none;
    bottom: 4%;
    color: transparent;
    border-bottom: 2px solid #fff;
  }
`;
