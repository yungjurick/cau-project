import React from "react";
import styled from "styled-components";
import Video from "./video";

export default function WrapForTeam({
  margin,
  top = "8%",
  src,
  children,
  ...props
}) {
  return (
    <Wrap>
      {children}
      <Absolute top={top} {...props}>
        <Video src={src} style={{ margin }} />
      </Absolute>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
`;

const Absolute = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: 0;
  width: 100%;
  z-index: 999;
`;
