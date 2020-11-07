import React from "react";
import styled from "styled-components";
import { mobileLAbove } from "../styles/mediaQuery";
import { SIZES } from "../styles/scheme";
import Footer from "./footer";

export default function MainLayout({ children }) {
  return (
    <Container>
      <Content>
        <Projects>{children}</Projects>
        <Footer />
      </Content>
    </Container>
  );
}

const subSize = {
  mobile: SIZES.nav.mobile + "rem",
  desktop: SIZES.nav.desktop + "rem",
  projects: {
    mobile: SIZES.nav.mobile + SIZES.footer.mobile + "rem",
    desktop: SIZES.nav.desktop + SIZES.footer.desktop + "rem",
  },
};

const Container = styled.div`
  display: flex;
  margin: auto;
  left: 0;
  right: 0;
  padding: 0;
  max-width: 100%;
  width: 100%;
  height: calc(100vh - ${subSize.mobile});
  ${mobileLAbove`
    height: calc(100vh - ${subSize.desktop});
  `}
`;

const Content = styled.div`
  position: relative;
  width: 100%;
`;

const Projects = styled.div`
  overflow-x: hidden;
  padding: 1rem 1rem 2rem 1rem;
  min-height: calc(100vh - ${subSize.projects.mobile});
  ${mobileLAbove`
    padding: 1rem 1rem 2rem 1rem;
    min-height: calc(100vh - ${subSize.projects.desktop});
  `}
`;
