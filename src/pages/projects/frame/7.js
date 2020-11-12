import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/frame/team7";

export default () => {
  return (
    <ProjectLayout title="CONSTELLATE THE MOMENT" names="주연성 | 황상윤">
      <Desc fw={400}>
        계약이 만료되어 강제이전을 준비 중인 탈북 청소년을 위한 ‘여명학교’의
        새로운 보금자리를 디자인 했습니다.
      </Desc>

      <Desc fw={400}>
        여명학교의 설립 방향성과 이전이 예정되어 있던 은평구 사이트와의 연결성을
        고려하여 ‘서울혁신파크’의 ‘미래청’에 이전하는 가상의 시나리오를 바탕으로
        기존의 혁신 파크의 문화·기술적 자원과 교육공간의 결합을 통해 사회적 문제
        해결과 새로운 교육공간의 방향성을 제시하고자 합니다.
      </Desc>

      <Zoom margin="4rem 0 0 0">
        <Image src={`${CDN}/1.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/2.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/3.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/4.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/5.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/6.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/7.jpg`} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
