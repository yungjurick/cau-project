import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { laptopAbove, mobileLAbove, tabletAbove } from "../styles/mediaQuery";

export default function AboutPage() {
  const [mouse, setMouse] = useState({});
  const [isIn, setIsIn] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      posterImg: file(relativePath: { eq: "poster.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2580) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arrow: file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      faces: allFile(
        filter: { relativePath: { glob: "people/*.jpg" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      faceImg: file(relativePath: { eq: "face.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const handleMouseMove = e => {
    if (document.querySelector(".g_menu")) {
      return setIsIn(false);
    }
    if (e.clientX < 200 && e.clientY > 50) {
      setIsIn(true);
      setMouse({ x: e.clientX, y: window.scrollY + e.clientY });
    } else {
      setIsIn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Layout>
      <MobileGone>
        <Cursor
          id="cursor_cover"
          style={{ background: "transparent" }}
        ></Cursor>
        <div
          aria-hidden="true"
          tabIndex="-1"
          role="button"
          onClick={() => window.history.back()}
          style={{
            display: "block",
            opacity: isIn ? 1 : 0,
            zIndex: 98,
            width: "40px",
            height: "40px",
            position: "absolute",
            top: `${mouse.y || 0}px`,
            left: `${mouse.x || 0}px`,
            transform: "rotate(-90deg)",
            cursor: "none",
          }}
        >
          <Img
            imgStyle={{ objectFit: "contain" }}
            fluid={data.arrow.childImageSharp.fluid}
          />
        </div>
      </MobileGone>
      <Wrapper>
        <Inner>
          <H1 className="gothic">어디로든 문</H1>
          <P
            className="gothic"
            style={{ wordBreak: "keep-all", textAlign: "justify" }}
          >
            중앙대학교 실내환경디자인학과 제 16회 졸업작품 전시회{" "}
            {"<어디로든 문 : A door, can go everywhere>"}전은 만화 ‘도라에몽’의
            어디로든 갈 수 있는 문에서 영감을 얻은 타이틀로 어떤 공간이든
            무한으로 상상 가능하다는 의미와, 이 전시가 우리에게 원하는 미래
            어디든 갈 수 있는 문이 되길 바라는 의미를 담고 있다.
          </P>
          <H1HN>Exhibition Composition</H1HN>
          <Flex>
            <Left>
              <P1 className="gothic">https://20chicgrad.netlify.app/</P1>
              <P2 className="gothic">Instagram @chic.grad</P2>
            </Left>
            <Right>
              <P1 className="gothic">
                학교 홈페이지 http://www.indesign.cau.ac.kr/
              </P1>
              <P2 className="gothic">학교 전화번호 031-670-4788</P2>
            </Right>
          </Flex>
          <H2HN className="gothic">지도 교수</H2HN>
          <Flex2>
            <L2>
              <P3>Handle</P3>
              <P2 className="gothic">김희정</P2>
            </L2>
            <C2>
              <P3>Box</P3>
              <P2 className="gothic">장선아</P2>
            </C2>
            <R2>
              <P3>Frame</P3>
              <P2 className="gothic">이준상</P2>
            </R2>
          </Flex2>
          <H2HN className="gothic">전시참여학생</H2HN>
          <P1
            className="gothic"
            style={{
              lineHeight: 1.8,
              wordBreak: "keep-all",
              textAlign: "justify",
            }}
          >
            강동희, 강민지, 강유정, 곽가, 구가영, 권희영, 김명주, 김미나,
            김이현, 김현경, 김혜진, 마정서, 박연주, 박예진, 박준수, 박지현,
            박충실, 부림림, 안현정, 양지원, 양진선, 유사동, 육자, 윤수지,
            윤자경, 이나경, 이박문, 이시혜, 이주영, 이한선, 이효정, 임아림,
            장령희, 장열, 정민지, 조민경, 주연성, 최연호, 한유진, 한채윤,
            한혜인, 황상윤, 황예린
          </P1>
          <H2HN className="gothic">졸업준비위원회</H2HN>
          <Space />
          <Flex>
            <L3>
              <LabelFlex>
                <P1 className="gothic">위원장</P1>
                <P2 className="gothic">조민경</P2>
              </LabelFlex>
              <LabelFlex>
                <P1 className="gothic">부위원장</P1>
                <P2 className="gothic">양지원</P2>
              </LabelFlex>
              <LabelFlex>
                <P1 className="gothic">기획부</P1>
                <P2 className="gothic">김미나, 박연주, 박예진, 이나경</P2>
              </LabelFlex>
            </L3>
            <R3>
              <LabelFlex>
                <P1 className="gothic">섭외부</P1>
                <P2 className="gothic">윤수지, 한혜인</P2>
              </LabelFlex>
              <LabelFlex>
                <P1 className="gothic">총무부</P1>
                <P2 className="gothic">양지원, 양진선</P2>
              </LabelFlex>
            </R3>
          </Flex>
          <Space2 />
          <Pictures>
            {[
              data.faces.edges.map(({ node }, index) => (
                <Face key={index}>
                  <Img
                    imgStyle={{
                      objectFit: "cover",
                      objectPosition: "center 20%",
                    }}
                    fluid={{
                      ...node.childImageSharp.fluid,
                      aspectRatio: 1 / 1,
                    }}
                  />
                </Face>
              )),
            ]}
          </Pictures>
        </Inner>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 2rem 2rem;
  ${mobileLAbove`
    padding: 4rem 1rem;
  `}
  ${tabletAbove`
    padding: 4rem 5rem;
  `}
  ${laptopAbove`
    padding: 4rem 18rem;
  `}
`;

const Inner = styled.div`
  padding: 0 1rem;
  ${mobileLAbove`
    padding: 0 2rem;
  `}
`;

const H1 = styled.h3`
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -1.2px;
  ${mobileLAbove`
    margin-top: 4rem;
    font-size: 1.8rem;
  `}
`;

const H1HN = styled.h3`
  margin-top: 3rem;
  font-size: 1.2rem;
  font-weight: 800;
  ${mobileLAbove`
    margin-top: 6rem;
    font-size: 1.8rem;
  `}
`;

const H2HN = styled.h3`
  margin-top: 3rem;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -1.2px;
  ${mobileLAbove`
    margin-top: 6rem;
    font-size: 1.8rem;
  `}
`;

const P = styled.p`
  margin-top: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -1.2px;
  font-size: 0.85rem;
  word-break: keep-all;
  ${mobileLAbove`
    font-size: 1.2rem;
    margin-top: 2rem;
  `}
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  ${mobileLAbove`
    flex-direction: row;
  `}
`;

const Flex2 = styled.div`
  display: flex;
  flex-direction: column;
  ${mobileLAbove`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const Left = styled.div`
  margin-right: auto;
`;
const Right = styled.div`
  flex-basis: 100%;
  ${mobileLAbove`
  flex-basis: 50%;
  `}
`;

const L2 = styled.div`
  /* flex-basis: 100%; */
  ${mobileLAbove`
  // flex-basis: 33%;
  `}
`;
const C2 = styled.div`
  /* flex-basis: 100%; */
  text-align: start;
  ${mobileLAbove`
    // flex-basis: 33%;
    // justify-self: center;
  `}
`;
const R2 = styled.div`
  /* flex-basis: 100%; */
  text-align: start;
  ${mobileLAbove`
  // flex-basis: 33%;
  // justify-self: flex-end;
  `}
`;

const P1 = styled.p`
  font-size: 0.85rem;
  margin-top: 1.2rem;
  line-height: 1.3;
  letter-spacing: -1.2px;
  ${mobileLAbove`
    font-size: 1.2rem;
    margin-top: 2rem;
    
  `}
`;

const P2 = styled.p`
  font-size: 0.85rem;
  margin-top: 0.25rem;
  ${mobileLAbove`
    font-size: 1.2rem;
    margin-top: 0.5rem;
  `}
`;

const P3 = styled.p`
  font-size: 1rem;
  margin-top: 1.2rem;
  ${mobileLAbove`
    font-size: 1.6rem;
    margin-top: 2rem;
  `}
`;

const L3 = styled.div`
  flex-basis: 100%;
  ${mobileLAbove`
    flex-basis: 50%;
  `}
`;

const R3 = styled.div`
  flex-basis: 100%;
  text-align: start;
  ${mobileLAbove`
  flex-basis: 50%;
  `}
`;

const LabelFlex = styled.div`
  display: flex;
  flex-basis: 100%;
  margin-bottom: 0.5rem;
  p {
    :nth-child(1) {
      margin-right: auto;
    }
    :nth-child(2) {
      flex-basis: 70%;
    }
    margin: 0;
  }
`;

const Space = styled.div`
  margin-top: 1.2rem;
  ${mobileLAbove`
    margin-top: 2rem;
  `}
`;

const Space2 = styled.div`
  margin-top: 3rem;
  ${mobileLAbove`
    margin-top: 6rem;
  `}
`;

const Pictures = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
`;

const Face = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  flex-basis: calc(16.6667% - 10px);
`;

const MobileGone = styled.div`
  display: none;
  ${tabletAbove`
    display: block;
  `}
`;

const Cursor = styled.div`
  left: 0;
  top: 0;
  height: 100%;
  width: 200px;
  position: absolute;
  cursor: none;
`;
