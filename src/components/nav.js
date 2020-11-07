import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { COLORS, SIZES } from "../styles/scheme";
import { mobileLAbove, tabletAbove } from "../styles/mediaQuery";
import SEO from "./seo";
import GlobalMenu from "./globalMenu";

export default function Nav({ noNav }) {
  const data = useStaticQuery(graphql`
    query {
      brand: file(relativePath: { eq: "brand.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  if (noNav) return null;
  return (
    <Navigation>
      <SEO />
      <Container>
        <LogoCover>
          <Logo to="/projects" />
          <Img
            imgStyle={{ objectFit: "contain" }}
            fluid={data.brand.childImageSharp.fluid}
          />
        </LogoCover>
        <Menus left>
          <Menu to="/projects/handle/" activeClassName="active">
            Handle
          </Menu>
          <Menu to="/projects/box/" activeClassName="active">
            Box
          </Menu>
          <Menu to="/projects/frame/" activeClassName="active">
            Frame
          </Menu>
        </Menus>
        <Menus right>
          <Menu to="/guest/" activeClassName="active">
            Guest
          </Menu>
          <Menu to="/about/" activeClassName="active">
            About
          </Menu>
        </Menus>
        <GlobalMenu />
      </Container>
    </Navigation>
  );
}

const Navigation = styled.nav`
  position: fixed;
  z-index: 70;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 13px rgba(100, 110, 140, 0.1),
    0 2px 4px rgba(100, 110, 140, 0.15);
  height: ${SIZES.nav.mobile}rem;
  ${mobileLAbove`
    height: ${SIZES.nav.desktop}rem;
  `};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  ${mobileLAbove`
    justify-content: flex-start;
  `};
`;

const LogoCover = styled.div`
  position: absolute;
  width: 150px;
  top: 20px;
  left: 0;
  right: 0;
  margin: auto;
  ${mobileLAbove`
    width: 200px;
    top: 28px;
  `}
`;

const Logo = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
`;

const Menus = styled.div`
  height: 100%;
  margin-right: ${props => (props.left ? `auto` : ``)};
  margin-left: ${props => (props.left ? `1rem` : 0)};
  display: none;
  ${tabletAbove`
    display: block;
  `};
`;

const Menu = styled(Link)`
  margin-left: 1.2rem;
  display: inline-flex;
  align-items: center;
  font-weight: 400;
  font-size: 1.3rem;
  height: 100%;
  color: ${COLORS.primary};
  letter-spacing: 1.2px;
  &.active {
    font-weight: 700;
    background: linear-gradient(
        to right,
        #fff 2%,
        transparent 2%,
        transparent 97%,
        #fff 97%
      ),
      linear-gradient(
        to bottom,
        transparent 50%,
        yellow 50%,
        yellow 65%,
        transparent 65%
      );
  }
  &:hover {
    font-weight: 700;
    background: linear-gradient(
        to right,
        #fff 2%,
        transparent 2%,
        transparent 97%,
        #fff 97%
      ),
      linear-gradient(
        to bottom,
        transparent 50%,
        yellow 50%,
        yellow 65%,
        transparent 65%
      );
  }
  &:visited:not(.active) {
    color: ${COLORS.primary};
  }
`;
