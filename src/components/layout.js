import React from "react";
import styled from "styled-components";
import Nav from "./nav";
import { SIZES } from "../styles/scheme";
import { mobileLAbove } from "../styles/mediaQuery";

export default function Layout({ children, noNav, ...props }) {
  return (
    <React.Fragment>
      <Nav noNav={noNav} />
      <Main {...props}>{children}</Main>
    </React.Fragment>
  );
}

const Main = styled.main`
  padding-top: ${SIZES.nav.mobile}rem;
  background: #fff;
  min-height: 100vh;
  ${mobileLAbove`
    padding-top: ${SIZES.nav.desktop}rem;
  `};
`;
