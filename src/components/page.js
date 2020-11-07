import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/scheme";

export default function Page({ current, last, onChangePage }) {
  return (
    <Container>
      <Buttons>
        <Button
          disabled={current === 0}
          onClick={() => onChangePage(current - 1)}
        >
          {"<"}
        </Button>
        <CurrentPage>{current + 1}</CurrentPage>
        <Button
          disabled={last === current + 1}
          onClick={() => onChangePage(current + 1)}
        >
          {">"}
        </Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const CurrentPage = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
`;
const Button = styled.button`
  background: ${COLORS.primary};
  color: #fff;
  padding: 0.5rem 1rem;
  line-height: 1;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  :disabled {
    background: #efefef;
    cursor: not-allowed;
  }
`;
