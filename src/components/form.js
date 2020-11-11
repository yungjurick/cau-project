import React, { useState } from "react";
import styled from "styled-components";
import { firestore } from "../../firebase";
import { tabletAbove } from "../styles/mediaQuery";
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
      from: from || "익명",
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
      <To>To. </To>
      <ToSelect
        className="gothic"
        searchable={false}
        placeholder="모두"
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
      <Comment
        className="gothic"
        value={content}
        onChange={onChangeContent}
        placeholder="축하 메시지를 남겨주세요 :)"
      />
      <ToFrom>From. </ToFrom>
      <From
        className="gothic"
        type="text"
        value={from}
        onChange={onChangeFrom}
        placeholder="익명"
      />
      <Password
        className="gothic"
        type="password"
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호"
      />
      <Button disabled={!isButtonAbled()}>SEND</Button>
    </Container>
  );
}

const To = styled.p`
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  margin-right: 5px;
  margin-top: 1rem;
  ${tabletAbove`
    margin-top: 0;
  `}
`;
const ToFrom = styled.p`
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  margin-right: 5px;
  margin-top: 2rem;
  ${tabletAbove`
    margin-top: 0;
  `}
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  :focus {
    outline: none;
  }
  ${tabletAbove`
    flex-direction: row;
    align-items: stretch;
    height: 40px;
    min-height: 40px;
  `}
`;

const ToSelect = styled(Select)`
  margin-right: 10px;
  color: ${COLORS.primary};
  border-radius: 0 !important;
  border: none !important;
  border-bottom: 1px solid ${COLORS.primary} !important;
  margin-bottom: 1rem;
  width: 100%;
  height: 40px;
  .react-dropdown-select-input {
    position: absolute;
    font-family: ${FONT_FAMILY_GOTHIC};
    top: 11px;
    left: 0;
    width: 100%;
    color: ${COLORS.primary};
    margin: 0;
    font-size: 1rem;
    ::placeholder {
      color: ${COLORS.primary};
    }
  }
  margin-bottom: 1rem;
  ${tabletAbove`
    min-width: 150px !important;
    width: 150px !important;
    margin-bottom: 0;
  `}
`;

const Comment = styled.input`
  font-size: 1rem;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${COLORS.primary};
  flex-grow: 0;
  height: 40px;
  color: ${COLORS.primary};
  ::placeholder {
    color: ${COLORS.primary};
  }
  :focus {
    outline: none;
  }
  ${tabletAbove`
    flex-grow: 1;
    margin-right: 10px;
  `}
`;

const From = styled.input`
  border: 0;
  margin-right: 0;
  font-size: 1rem;
  color: ${COLORS.primary};
  :focus {
    outline: none;
  }
  width: 100%;
  ::placeholder {
    color: ${COLORS.primary};
  }
  height: 40px;
  width: 100%;
  border-bottom: 1px solid ${COLORS.primary};
  ${tabletAbove`
    margin-right: 10px;
    width: 140px;
  `}
`;
const Password = styled.input`
  border: 0;
  margin-right: 0;
  height: 40px;
  margin-top: 0.8rem;
  font-size: 1rem;
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
    margin-right: 0.8rem;
    margin-top: 0;
    width: 140px;
  `}
`;
const Button = styled.button`
  background: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  padding: 0.6rem 1rem;
  margin-top: 1.2rem;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  ${tabletAbove`
    margin-top: 0;
    min-width: 100px;
    flex-basis: 100px;
  `}
  :disabled {
    color: ${COLORS.primary};
    background: #fff;
    cursor: not-allowed;
  }
`;
