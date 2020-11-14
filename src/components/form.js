import React, { useState } from "react";
import styled from "styled-components";
import { firestore } from "../../firebase";
import { tabletAbove, mobileLAbove, laptopAbove } from "../styles/mediaQuery";
import { COLORS, FONT_FAMILY_GOTHIC } from "../styles/scheme";
import Select from "react-dropdown-select";
import { projectInfo } from "../config/projects";
import { map, values, sel, unique, flat, go, sortBy, identity } from "fxjs";

const checkStr = str => {
  if (!str) return false;
  if (str.trim().length < 1) return false;
  return true;
};

export function Form({ handleFilter, handleAddComments }) {
  const [content, setContent] = useState("");
  const [from, setFrom] = useState("");
  const [password, setPassword] = useState("");
  const [currentTo, setCurrentTo] = useState("모두");

  const onChangeContent = e => {
    setContent(e.target.value);
  };

  const onChangeFrom = e => {
    setFrom(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleChangeTo = ([{ value }]) => {
    setCurrentTo(value);
  };

  const onSuccess = data => ({ id }) => {
    handleAddComments({ ...data, id });
    handleFilter([{ value: null }]);
    setContent("");
    setFrom("");
    setPassword("");
  };

  const isButtonAbled = () =>
    [password, content].map(checkStr).reduce((b1, b2) => b1 && b2, true);

  async function update() {
    const countRef = firestore.collection("count");
    const countSnapshot = await countRef.get();
    const countDoc = countSnapshot.docs[0];

    const id = countDoc.id;
    const count = countDoc.data().count;

    if (!isButtonAbled) return;
    let data = {
      to: currentTo || "모두",
      from: from || "누군가",
      password,
      content,
      time: new Date(),
    };
    countRef.doc(id).update({ count: count + 1 });
    firestore
      .collection("comments")
      .add(data)
      .then(onSuccess(data))
      .catch(err => console.error(err));
  }

  const onSubmit = e => {
    e.preventDefault();
    update();
  };

  return (
    <Container onSubmit={onSubmit}>
      <ToWrapper>
        <ToSelect
          className="gothic"
          searchable={false}
          placeholder="모두"
          value={"모두"}
          options={[
            { value: "모두", label: "모두" },
            ...go(
              projectInfo,
              values,
              flat,
              map(sel("people")),
              flat,
              unique,
              sortBy(identity),
              map(value => ({ value, label: value }))
            ),
          ]}
          onChange={handleChangeTo}
        />
        <WrapperText className="gothic">
          에게
        </WrapperText>
      </ToWrapper>
      <FromWrapper>
        <From
          className="gothic"
          type="text"
          value={from}
          onChange={onChangeFrom}
          placeholder="누군가"
        />
        <WrapperText className="gothic">
          (으)로 부터
        </WrapperText>
      </FromWrapper>
      <Comment
        className="gothic"
        value={content}
        onChange={onChangeContent}
        placeholder={`${currentTo}에게 축하의 말을 남겨주세요..`}
      />
      <Password
        className="gothic"
        type="password"
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호"
      />
      <ButtonContainer>
        <Button disabled={!isButtonAbled()}>보내기</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.form`
  display: grid;
  grid-template-columns: [col-start] 40% [col-1] 25% [col-2] auto [col-end];
  grid-template-rows: [row-start] auto [row-1] auto [row-2] auto [row-end];
  column-gap: 5px;

  width: 100%;
  :focus {
    outline: none;
  }
  ${tabletAbove`
    grid-template-columns: [col-start] 20% [col-1] 25% [col-2] auto [col-3] 20% [col-4] 11% [col-end];
    grid-template-rows: [row-start] auto [row-1] auto [row-end];
    grid-row-start: row-start;
    grid-row-end: row-1;
    min-height: 40px;
  `}
`;

const ToWrapper = styled.div`
  border-radius: 7px !important;
  border: 1.5px solid ${COLORS.primary} !important;
  width: 100%;
  height: 40px;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
  ${tabletAbove`
    grid-column-start: col-start;
    grid-column-end: col-1;
    grid-row-start: row-start;
    grid-row-end: row-1;
  `}
`;

const ToSelect = styled(Select)`
  margin-right: 10px;
  color: ${COLORS.primary};
  border: none !important;
  flex-direction: row-reverse !important;
  width: 80px !important;
  .react-dropdown-select-content > span {
    margin-left: 0.5rem !important;
  }
  .react-dropdown-select-input {
    position: absolute;
    text-align: center;
    font-family: ${FONT_FAMILY_GOTHIC};
    top: 0;
    left: 0.5rem !important;
    width: 100%;
    height: 100%;
    color: ${COLORS.primary};
    margin: 0;
    font-size: 1rem;
    ::placeholder {
      color: ${COLORS.primary};
    }
  }
  ${laptopAbove`
    width: 140px !important;
    .react-dropdown-select-content > span {
      margin-left: 2.4rem !important;
    }
  `}
  ${tabletAbove`
    grid-column-start: col-start;
    grid-column-end: col-1;
    grid-row-start: row-start;
    grid-row-end: row-1;
    width: 90px !important;
    .react-dropdown-select-content > span {
      margin-left: 1rem !important;
    }
  `}
`;

const Comment = styled.textarea`
  grid-column-start: col-start;
  grid-column-end: col-end;
  grid-row-start: row-1;
  grid-row-end: row-2;
  resize: none;
  -webkit-appearance: none;
  box-shadow: none !important;
  padding: 6px;
  font-size: 1rem;
  width: 100%;
  border: 0;
  border-radius: 7px !important;
  border: 1.5px solid ${COLORS.primary} !important;
  flex-grow: 0;
  height: 120px;
  color: ${COLORS.primary};
  ::placeholder {
    color: gray;
  }
  :focus {
    outline: none;
  }
  ${tabletAbove`
    height: 40px;
    grid-column-start: col-start;
    grid-column-end: col-4;
    grid-row-start: row-1;
    grid-row-end: row-end;
  `}
`;

const FromWrapper = styled.div`
  grid-column-start: col-1;
  grid-column-end: col-end;
  grid-row-start: row-start;
  grid-row-end: row-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 0;
  width: 100%;
  height: 40px;
  border-radius: 7px !important;
  border: 1.5px solid ${COLORS.primary} !important;
  padding: 7px;
  ${tabletAbove`
    grid-column-start: col-1;
    grid-column-end: col-2;
    grid-row-start: row-start;
    grid-row-end: row-1;
  `}
`;

const From = styled.input`
  border: 0;
  width: 60%;
  margin-right: 0;
  font-size: 1rem;
  border-radius: 7px;
  color: ${COLORS.primary};
  :focus {
    outline: none;
  }
  ::placeholder {
    color: gray;
  }
`;

const WrapperText = styled.p`
  color: ${COLORS.primary};
  font-size: 1rem;
  font-weight: bold;
`;

const Password = styled.input`
  grid-column-start: col-start;
  grid-column-end: col-2;
  grid-row-start: row-2;
  grid-row-end: row-end;
  border: 0;
  margin-right: 0;
  height: 40px;
  margin-top: 0.8rem;
  font-size: 1rem;
  -webkit-appearance: none;
  border-radius: 0;
  color: ${COLORS.primary};
  ::placeholder {
    color: ${COLORS.primary};
  }
  font-size: 1rem;
  :focus {
    outline: none;
  }
  width: 100%;
  border-bottom: 1px solid ${COLORS.primary};
  ${tabletAbove`
    margin-top: 0;
    grid-column-start: col-3;
    grid-column-end: col-4;
    grid-row-start: row-start;
    grid-row-end: row-1;
  `}
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  ${tabletAbove`
    margin-top: 0;
    padding: 0;
    align-items: center;
    grid-column-start: col-4;
    grid-column-end: col-end;
    grid-row-start: row-start;
    grid-row-end: row-end;
  `}
`;
const Button = styled.button`
  background: ${COLORS.yellow};
  border: 1.5px solid ${COLORS.primary};
  border-radius: 50%;
  cursor: pointer;
  color: ${COLORS.primary};
  font-weight: 700;
  padding: 0.6rem 1rem;
  /* margin-top: 0.8rem; */
  width: 100%;
  height: 80%;
  max-height: 90px;
  font-size: 1rem;
  ${tabletAbove`
    margin-top: 0;
    height: 90px;
    width: 90px;
    padding: 0;
  `}
  :disabled {
    color: ${COLORS.primary};
    background: #fff;
    cursor: not-allowed;
  }
`;
