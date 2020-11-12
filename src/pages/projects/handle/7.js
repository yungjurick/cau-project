import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import WrapForTeam from "../../../components/wrapForTeam";
import Zoom from "../../../components/zoom";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team7";

export default () => {
  return (
    <ProjectLayout title="너나들이" names="강민지 | 한채윤">
      <Desc fw={400}>
        너나들이 서울시 정신건강복지센터는 현재 관리자 중심으로 운영되고 있는
        시민 복지시설을 필요한 사람들이 누구나 주저하지 않고 언제나 편안하게
        이용할 수 있도록 사용자 중심의 공간으로 디자인하여 새로운
        정신건강복지센터의 공간적 모델을 제시하고자 하였다. 이용자들의 상황과
        심리적 특성을 고려하여 사용자와 관리자의 시선을 공간 구성과 디자인을
        통해 긍정적으로 풀어내고, 다양한 이유로 공간을 찾아오는 이용자들이
        집처럼 편하게 머물며 위로와 위안을 받을 수 있는 일상의 공간으로
        디자인하였다.
      </Desc>

      <div style={{ marginTop: "4rem" }} />

      <WrapForTeam
        margin="0"
        style={{ padding: "10%" }}
        top="12.6%"
        src="https://www.youtube.com/embed/FrSYijC4SBo"
      >
        <Zoom margin="0">
          <Image src={`${CDN}/1.jpg`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/2.jpg`} />
        </Zoom>

        <Image src={`${CDN}/3.jpg`} />

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

        <Zoom margin="0">
          <Image src={`${CDN}/8.jpg`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/9.jpg`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/10.jpg`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/11.jpg`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/12_1.jpg`} />
        </Zoom>
        <Zoom margin="0">
          <Image src={`${CDN}/12.jpg`} />
        </Zoom>

        <Gif src={`${CDN}/14.gif`} />
        <Zoom margin="0">
          <Image src={`${CDN}/13.jpg`} />
        </Zoom>
      </WrapForTeam>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
