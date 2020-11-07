import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { firestore } from "../../firebase";
import Loading from "../components/loading";
import Comment from "../components/comment";
import { mobileLAbove } from "../styles/mediaQuery";
import { Form } from "../components/form";
import NoComments from "../components/noComments";
import Footer from "../components/footer";
import { COLORS, FONT_FAMILY_GOTHIC, SIZES } from "../styles/scheme";
import Select from "react-dropdown-select";
import { projectInfo } from "../config/projects";
import {
  sortByDesc,
  log,
  map,
  values,
  sel,
  mapL,
  tap,
  unique,
  flat,
  filter,
  go,
  chunkL,
  takeAll,
  match,
  not,
  sortBy,
  identity,
  noop,
} from "fxjs";

const sortByTime = sortByDesc(sel("time"));

export default function GuestPage() {
  const [comments, setComments] = useState();
  const [currentTo, setCurrentTo] = useState();

  useEffect(() => {
    firestore.collection("comments").onSnapshot(({ docs }) => {
      const guestComments = go(
        docs,
        mapL(doc => ({ id: doc.id, ...doc.data() })),
        sortByTime,
        takeAll
      );

      setComments(guestComments);
    });
  }, []);

  const handleChangeTo = ([{ value }]) => {
    setCurrentTo(value);
  };

  if (!comments) return <Loading />;

  return (
    <Layout>
      <Container>
        <Title>
          Guest Book<span className="gothic">방명록</span>
        </Title>
        <Contents>
          <ToSelect
            className="gothic"
            searchable={false}
            placeholder="받은 메시지를 확인하세요."
            options={[
              { value: null, label: "전체보기" },
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
          <Form handleFilter={handleChangeTo} />
          <Wrapper>
            {comments.length < 1 ? (
              <NoComments />
            ) : (
              go(comments, cmts =>
                match(currentTo)
                  .case(not)(() =>
                    map(
                      comment => <Comment key={comment.id} {...comment} />,
                      cmts
                    )
                  )
                  .else(() =>
                    go(
                      cmts,
                      filter(({ to }) => to === currentTo),
                      map(comment => <Comment key={comment.id} {...comment} />)
                    )
                  )
              )
            )}
          </Wrapper>
        </Contents>
      </Container>
      <Footer />
    </Layout>
  );
}

const ToSelect = styled(Select)`
  color: ${COLORS.primary};
  border: none !important;
  border-radius: 0 !important;
  border-bottom: 1px solid ${COLORS.primary} !important;
  margin-bottom: 1rem;
  width: 100%;
  .react-dropdown-select-input {
    position: absolute;
    font-family: ${FONT_FAMILY_GOTHIC};
    top: 7px;
    left: 0;
    width: 100%;
    color: ${COLORS.primary};
    margin: 0;
    font-size: 1rem;
    ::placeholder {
      color: ${COLORS.primary};
    }
  }
  ${mobileLAbove`
    width: 250px !important;
  `}
`;

const subSize = {
  mobile: SIZES.nav.mobile + "rem",
  desktop: SIZES.nav.desktop + "rem",
  projects: {
    mobile: SIZES.nav.mobile + SIZES.footer.mobile + "rem",
    desktop: SIZES.nav.desktop + SIZES.footer.desktop + "rem",
  },
};

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  min-height: calc(100vh - ${subSize.projects.mobile});
  ${mobileLAbove`
    padding-top: 4rem;
    padding-bottom: 4rem;
    min-height: calc(100vh - ${subSize.projects.desktop});
  `}
`;

const Title = styled.h2`
  display: inline-block;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 1rem;
  ${mobileLAbove`
    font-size: 1.5rem;
    margin-bottom: 3rem;
  `}
  span {
    line-height: 1.6;
    padding-left: 0.3rem;
    font-size: 0.6rem;
    ${mobileLAbove`
      font-size: 0.8rem;
    `}
    vertical-align: top;
  }
`;

const Contents = styled.div``;

const Wrapper = styled.div`
  margin: 2rem 0;
  ${mobileLAbove`
    margin: 3rem 0;
  `};
`;
