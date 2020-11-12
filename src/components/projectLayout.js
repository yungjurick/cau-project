import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FONT_FAMILY_GOTHIC } from "../styles/scheme";
import Layout from "./layout";
import MainLayout from "./mainLayout";
import srcDown from "../static/images/arrowDown.png";
import srcUp from "../static/images/arrowUp.png";

export default function ProjectLayout({ title, names, children }) {
  const [direction, setDirection] = useState();

  const handleMouseEvent = e => {
    const y = e.clientY;
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const up = window.innerHeight / 2 - 20;
    const down = window.innerHeight / 2 + 20;
    if (y > 50 && (y < up) & (scrollY > 100)) {
      setDirection("up");
    } else if (
      y > down &&
      y + scrollY < scrollHeight - window.innerHeight / 2
    ) {
      setDirection("down");
    } else {
      setDirection();
    }
  };
  useEffect(() => {
    document.addEventListener("contextmenu", event => event.preventDefault());
    window.addEventListener("mousemove", handleMouseEvent);
    return () => window.removeEventListener("mousemove", handleMouseEvent);
  }, []);

  return (
    <Layout>
      <MainLayout>
        <Cover direction={direction}>
          <Title>{title}</Title>
          <Names>{names}</Names>
          <Inner>{children}</Inner>
        </Cover>
      </MainLayout>
    </Layout>
  );
}

const Cover = styled.div`
  cursor: url(${props =>
      props.direction
        ? props.direction === "down"
          ? srcDown
          : srcUp
        : "normal"}),
    auto !important;
  position: relative;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  color: #000;
  margin-top: 4rem;
  font-family: ${FONT_FAMILY_GOTHIC};
  font-size: 24px;
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

const Inner = styled.div`
  padding: 4rem 0;
`;
