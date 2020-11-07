import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404 - Not found" robots="none" />
      <Container>
        <Heading>404</Heading>
        <Desc>{`없는 페이지 입니다 :(`}</Desc>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  max-width: 100%;
  padding: 8rem 1rem;
  margin: auto;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 4rem;
`;

const Desc = styled.p`
  text-align: center;
  font-size: 2rem;
  color: #555;
`;
