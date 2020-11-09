import React from "react";
import styled from "styled-components";
import { FONT_FAMILY, FONT_FAMILY_GOTHIC } from "../styles/scheme";

export default function Desc({ gothic = true, fw = 400, children, ...props }) {
  return (
    <P gothic={gothic} style={{ fontWeight: fw }} {...props}>
      {children}
    </P>
  );
}

const P = styled.p`
  & + & {
    margin-top: 0.85rem;
  }
  font-family: ${props => (props.gothic ? FONT_FAMILY_GOTHIC : FONT_FAMILY)};
  font-size: 14px;
  text-align: justify;
  line-height: 1.8;
  word-break: keep-all;
  color: #000;
`;
