import React from "react";
import styled from "styled-components";
import Layout from "./layout";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { COLORS } from "../styles/scheme";

export default function Loading() {
  return (
    <Layout>
      <Container>
        <Loader type="Grid" color={COLORS.primary} height={35} width={35} />
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
