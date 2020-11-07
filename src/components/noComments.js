import React from "react";
import styled from "styled-components";
import { mobileLAbove } from "../styles/mediaQuery";
import { COLORS } from "../styles/scheme";

export default function NoComments() {
  return (
    <Wrapper>
      <Ment className="gothic">
        아직 작성된 방명록이 없습니다.
        <br />
        {"방명록을 작성해주세요 :)"}
      </Ment>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 3rem;
  ${mobileLAbove`
    padding-top: 5rem;
  `}
`;

const Ment = styled.p`
  color: ${COLORS.primary};
  font-size: 1rem;
  text-align: center;
  ${mobileLAbove`
    font-size: 1.2rem;
  `}
`;
