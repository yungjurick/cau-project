import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/frame/team7/1.jpg";
import src2 from "../../../static/images/projects/frame/team7/2.jpg";
import src3 from "../../../static/images/projects/frame/team7/3.jpg";
import src4 from "../../../static/images/projects/frame/team7/4.jpg";
import src5 from "../../../static/images/projects/frame/team7/5.jpg";
import src6 from "../../../static/images/projects/frame/team7/6.jpg";

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
        <Image src={src1} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src2} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src3} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src4} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src5} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src6} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
