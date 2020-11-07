import React from "react";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { mobileLAbove, tabletAbove } from "../styles/mediaQuery";
import { SIZES } from "../styles/scheme";

export default function Footer({ noFooter }) {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (noFooter) return null;
  return (
    <FooterComponent>
      <Container>
        <Copy>
          <Respond>
            <LogoCover>
              <AbsoluteLink
                target="_blank"
                to="http://www.indesign.cau.ac.kr/"
              />
              <Img
                imgStyle={{ objectFit: "contain" }}
                fluid={data.logo.childImageSharp.fluid}
              />
            </LogoCover>
          </Respond>
          <Rights>
            Copyright ⓒ 2020 Chung-Ang University. All Right Reserved.
          </Rights>
        </Copy>
      </Container>
    </FooterComponent>
  );
}

const FooterComponent = styled.footer`
  height: ${SIZES.footer.mobile}rem;
  ${mobileLAbove`
    height: ${SIZES.footer.desktop}rem;
    `}
  ${tabletAbove`
    background-color: #fff;
    background-image: none;
  `}
  background-color: #fff;
  background-size: 16px 16px;
  background-image: linear-gradient(
      to right,
      rgba(0, 41, 245, 0.2) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 41, 245, 0.2) 1px, transparent 1px);
  background-repeat: repeat;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 100%;
  max-width: 100%;
  margin: auto;
  padding: 0 1rem;
  ${mobileLAbove`
    justify-content: flex-end;
  `};
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobileLAbove`
    align-items: flex-end;
  `};
`;

const Rights = styled.p`
  font-size: 0.5rem;
  color: #888;
  ${mobileLAbove`
    font-size: 0.65rem;
  `}
`;

const Respond = styled.div`
  display: flex;
  align-items: center;
  ${mobileLAbove`
    margin-bottom: 0.6rem;
  `}
`;

const LogoCover = styled.div`
  position: relative;
  width: 60px;
  margin-bottom: 0.65rem;
  ${mobileLAbove`
    margin-bottom: 0;
    margin-right: 0.35rem;
    width: 80px;
  `}
`;

const AbsoluteLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
`;
