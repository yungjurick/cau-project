import React from "react";
import styled from "styled-components";
import { FONT_FAMILY_GOTHIC } from "../styles/scheme";
import Layout from "./layout";
import MainLayout from "./mainLayout";

export default function ProjectLayout({ title, names, children }) {
  return (
    <Layout>
      <MainLayout>
        <Cover>
          <Title>{title}</Title>
          <Names>{names}</Names>
          <Inner>{children}</Inner>
        </Cover>
      </MainLayout>
    </Layout>
  );
}

const Cover = styled.div`
  position: relative;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  color: #000;
  margin-top: 4rem;
  font-family: ${FONT_FAMILY_GOTHIC};
  font-size: 18px;
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
