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
      <Outside>
        <To className="gothic">{to} <ToSpan>에게 도착한 메시지</ToSpan></To>
        <Delete onClick={onDelete}>&times;</Delete>
      </Outside>
      <Inner>
        <From className="gothic">{from}</From>
        <Content className="gothic">{content}</Content>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem 0;
  position: relative;
  flex-grow: 1;
  word-break: break-all;
  ${mobileLAbove`
    align-items: center;
  `}
`;
const Outside = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 7px;
  margin-bottom: 5px;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: auto;
  align-items: center;
  border: 1px solid ${COLORS.primary};
  border-radius: 7px;
  padding: 1.5rem;
  /* ${mobileLAbove`
    align-items: center;
    flex-direction: row;  
  `} */
`;

const Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  font-size: 1.5rem;
  color: ${COLORS.primary};
  background: none;
  :focus {
    outline: none;
  }
  ${mobileLAbove`
    font-size: 1.5rem;
  `}
`;

const To = styled.p`
  font-size: 1rem;
  color: ${COLORS.primary};
  width: 100%;
  font-weight: 700;
`;

const ToSpan = styled.span`
  font-size: 1rem;
  color: ${COLORS.primary};
  font-weight: 300;
`;
const From = styled.p`
  font-size: 1rem;
  color: ${COLORS.primary};
  width: 100%;
  min-width: 100%;
  font-weight: 700;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Content = styled.p`
  margin-right: auto;
  line-height: 1.4;
  font-size: 1rem;
  flex-basis: 100%;
  font-weight: 300;
  color: ${COLORS.primary};
`;
