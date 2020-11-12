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
  map,
  values,
  sel,
  mapL,
  unique,
  flat,
  filter,
  go,
  takeAll,
  match,
  not,
  sortBy,
  omit,
  identity,
} from "fxjs";

const isDev = process.env.NODE_ENV === "development";

export const COMMENTS_HEAD = "COMMENTS_HEAD";
export const COMMENTS = "COMMENTS";
export const COMMENTS_COUNT = "COMMENTS_COUNT";

export default function GuestPage() {
  const [comments, setComments] = useState();
  const [currentTo, setCurrentTo] = useState();

  async function fetchComments() {
    const commentsRef = firestore.collection("comments");
    const countRef = firestore.collection("count");

    const countSnapshot = await countRef.get();
    const comments_count_from_server = countSnapshot.docs[0].data().count;
    let comments_count_from_cache = window.localStorage.getItem(COMMENTS_COUNT);
    comments_count_from_cache = isNaN(comments_count_from_cache)
      ? 0
      : +comments_count_from_cache;

    const cachedHead = window.localStorage.getItem(COMMENTS_HEAD);
    const snapShotHead = await commentsRef
      .orderBy("time", "desc")
      .limit(1)
      .get();

    const currentHead = snapShotHead.docs[0].id;

    if (isDev) {
      console.log({ cachedHead, currentHead });
      console.log({ comments_count_from_cache, comments_count_from_server });
    }

    if (
      cachedHead === currentHead &&
      comments_count_from_cache === comments_count_from_server
    ) {
      // no need to fetch
      if (isDev) {
        console.log("FROM CACHE");
      }
      const commentsStr = window.localStorage.getItem(COMMENTS);
      const parsedComments = JSON.parse(commentsStr);
      setComments(parsedComments);
    } else {
      if (isDev) {
        console.log("FROM SERVER");
      }
      const snapshot = await commentsRef.orderBy("time", "desc").get();
      const guestComments = go(
        snapshot.docs,
        mapL(doc => ({ id: doc.id, ...doc.data() })),
        takeAll
      );
      window.localStorage.setItem(COMMENTS_HEAD, currentHead);
      window.localStorage.setItem(COMMENTS_COUNT, guestComments.length);
      window.localStorage.setItem(
        COMMENTS,
        JSON.stringify(guestComments.map(omit("password")))
      );
      setComments(guestComments);
    }
  }

  useEffect(() => {
    // fetchComments();
  }, []);

  const handleChangeTo = ([{ value }]) => {
    setCurrentTo(value);
  };

  const handleAddComments = data => {
    setComments([data, ...comments]);
  };

  return (
    <Layout>
      <Container>
        <h3 style={{ textAlign: "center" }}>
          🚧 <br />
          내부수리중
        </h3>
      </Container>
    </Layout>
  );
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
          <Form
            handleFilter={handleChangeTo}
            handleAddComments={handleAddComments}
          />
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
