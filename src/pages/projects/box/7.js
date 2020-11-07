import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src2 from "../../../static/images/projects/box/team7/2.png";
import src3 from "../../../static/images/projects/box/team7/3.png";
import src4 from "../../../static/images/projects/box/team7/4.png";
import src5 from "../../../static/images/projects/box/team7/5.png";
import src6 from "../../../static/images/projects/box/team7/6.png";
import src7 from "../../../static/images/projects/box/team7/7.png";
import src8 from "../../../static/images/projects/box/team7/8.png";
import src9 from "../../../static/images/projects/box/team7/9.png";
import src10 from "../../../static/images/projects/box/team7/10.png";

export default () => {
  return (
    <ProjectLayout title="JENGA Together" names="강동희">
      <Desc fw={400}>
        우리는 대부분 누군가와 함께할 때 행복을 느낀다. 그러나 기술의 발전과
        정보혁명 등으로 급변하는 사회가 개인화를 가속화 시킴에 따라 서로의 단절
        또한 깊어진다. 개인의 여가와 취미를 공유하는 사회적 커뮤니티의 형성으로,
        이웃사촌간의 사회적 단절과 고독, 소외감 등의 스트레스를 해결하고 다양한
        세대 구성원들이 함께 할 수 있는 공간이 요구된다. 따라서 젠가와 같이
        서로의 벽을 허물고 경험과 추억을 쌓아 올릴 수 있는 커뮤니티 센터를
        제시하고자 한다.
      </Desc>

      <div style={{ marginTop: "4rem" }} />

      <Gif name="boxTeam71" />

      <Zoom margin="0">
        <Image src={src2} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        Aeroview
      </Desc>

      <Zoom margin="0">
        <Image src={src3} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        1F - Main Hall
      </Desc>

      <Zoom margin="0">
        <Image src={src4} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        1F – Library
      </Desc>

      <Zoom margin="0">
        <Image src={src5} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        2F – Terrace Bar
      </Desc>

      <Zoom margin="0">
        <Image src={src6} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        2F – Space Cloud
      </Desc>

      <Zoom margin="0">
        <Image src={src7} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        2F – Board Game Zone
      </Desc>

      <Zoom margin="0">
        <Image src={src8} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        3F – Rooftop Stage
      </Desc>

      <Zoom margin="0">
        <Image src={src9} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src10} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
