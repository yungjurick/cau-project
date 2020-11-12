import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/box/team7";

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

      <Gif src={`${CDN}/1.gif`} />

      <Zoom margin="0">
        <Image src={`${CDN}/2.png`} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        Aeroview
      </Desc>

      <Zoom margin="0">
        <Image src={`${CDN}/3.png`} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        1F - Main Hall
      </Desc>

      <Zoom margin="0">
        <Image src={`${CDN}/4.png`} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        1F – Library
      </Desc>

      <Zoom margin="0">
        <Image src={`${CDN}/5.png`} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        2F – Terrace Bar
      </Desc>

      <Zoom margin="0">
        <Image src={`${CDN}/6.png`} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        2F – Space Cloud
      </Desc>

      <Zoom margin="0">
        <Image src={`${CDN}/7.png`} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        2F – Board Game Zone
      </Desc>

      <Zoom margin="0">
        <Image src={`${CDN}/8.png`} />
      </Zoom>

      <Desc style={{ marginTop: "4rem", fontWeight: 700, fontSize: "18px" }}>
        3F – Rooftop Stage
      </Desc>

      <Zoom margin="0">
        <Image src={`${CDN}/9.png`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/10.png`} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
