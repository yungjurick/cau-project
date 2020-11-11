import React, { useRef } from "react";
import styled from "styled-components";
import { firestore } from "../../firebase";
// import { format } from "date-fns";
// import { ko } from "date-fns/locale";
import { mobileLAbove } from "../styles/mediaQuery";
import { COLORS } from "../styles/scheme";

export default function Comment({ id, content, to, from, password }) {
  const commentsRef = useRef();

  async function remove() {
    const countRef = firestore.collection("count");
    const countSnapshot = await countRef.get();
    const countDoc = countSnapshot.docs[0];

    const countId = countDoc.id;
    const count = countDoc.data().count;

    countRef.doc(countId).update({ count: count - 1 });
    firestore.collection("comments").doc(id).delete();
  }

  const onDelete = () => {
    const pwd = window.prompt("비밀번호를 입력해주세요");
    if (pwd === password) {
      remove();
      document.querySelector(`#${id}`).remove();
    } else if (!pwd) {
      return;
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <Wrapper id={id} ref={commentsRef}>
      <Inner>
        <To className="gothic">To. {to}</To>
        <Content className="gothic">{content}</Content>
        <From className="gothic">From. {from}</From>
      </Inner>
      <Delete onClick={onDelete}>&times;</Delete>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  position: relative;
  flex-grow: 1;
  word-break: break-all;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  border-bottom: 1px solid ${COLORS.primary};
  ${mobileLAbove`
    align-items: center;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: auto;
  align-items: center;
  ${mobileLAbove`
    align-items: center;
    flex-direction: row;  
  `}
`;

const Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.45rem;
  min-width: 40px;
  width: 40px;
  height: 40px;
  border: 0;
  color: ${COLORS.primary};
  background: none;
  :focus {
    outline: none;
  }
  ${mobileLAbove`
    font-size: 1.5rem;
    padding: 0.35rem;
  `}
`;

const To = styled.p`
  font-size: 1rem;
  color: ${COLORS.primary};
  width: 100%;
  min-width: 100%;
  margin-bottom: 0.65rem;
  font-weight: 700;
  ${mobileLAbove`
    width: 100px;
    min-width: 100px;
    margin-bottom: 0;
  `}
`;
const From = styled.p`
  font-size: 1rem;
  color: ${COLORS.primary};
  width: 100%;
  min-width: 100%;
  font-weight: 700;
  text-align: end;
  margin-top: 0.65rem;
  margin-right: -50px;
  ${mobileLAbove`
    width: 100px;
    margin-top: 0;
    margin-right: 0;
    min-width: 100px;
  `}
`;

const Content = styled.p`
  margin-right: auto;
  line-height: 1.4;
  font-size: 1rem;
  flex-basis: 100%;
  font-weight: 700;
  color: ${COLORS.primary};
`;
