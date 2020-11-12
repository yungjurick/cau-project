import React from "react";
import styled from "styled-components";

export default function Gif({ src, ...props }) {
  return (
    <Wrapper {...props}>
      <img src={src} alt="largegif" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  font-size: 0;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
