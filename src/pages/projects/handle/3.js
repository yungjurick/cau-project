import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/handle/team3/2.png";
import src2 from "../../../static/images/projects/handle/team3/4.png";
import src3 from "../../../static/images/projects/handle/team3/7.png";

export default () => {
  return (
    <ProjectLayout title="웃는남자 오픈 런 씨어터" names="박지현 | 황예린">
      <Desc fw={400}>
        웃는 남자 오픈 런 씨어터는 한국최초의 뮤지컬 전용 공연장이다. 기존
        공연장의 틀을 벗어나 시대적 흐름을 반영한 디지털 공연장으로 쉘 타입의
        공연장 전체가 무대의 배경이 된다. 관객은 공연을 다양한 위치에서 감상할
        수 있으며 360°의 공간 속에서 배우와 관객이 무대 속에서 하나가 되는
        입체적 공연장으로 디자인한 프로젝트이다.
      </Desc>
      <Gif name="handleTeam3One" />
      <Zoom>
        <Image src={src1} />
      </Zoom>
      <Gif name="handleTeam3Three" />
      <Zoom>
        <Image src={src2} />
      </Zoom>
      <Gif name="handleTeam3Five" />
      <div style={{ marginTop: "20rem" }} />
      <Gif name="handleTeam3Six" />
      <Image src={src3} />
      <Desc style={{ fontSize: "12px", marginTop: "2rem", textAlign: "end" }}>
        (출처: EMK뮤지컬컴퍼니)
      </Desc>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
