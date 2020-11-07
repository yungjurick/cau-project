import React from "react";
import styled from "styled-components";

export default function Video({ src, ...props }) {
  return (
    <Container {...props}>
      <Iframe
        width="1200"
        height="675"
        src={src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  margin: 3rem 0;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
