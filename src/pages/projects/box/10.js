import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/box/team10";

export default () => {
  return (
    <ProjectLayout title="SPREAD OUT" names="안현정">
      <Desc fw={400}>
        사회가 나날이 발전함에 따라 주변 자연환경은 점차 파괴되어가고, 그곳을
        서식지로 삼는 우리 주변의 야생동물에게도 영향을 끼친다. 하지만 그에 따른
        시민 의식은 턱없이 부족하다. 본 프로젝트는 야생동물 보호센터를 통해
        야생동물의 보호와 자연생태계에 대한 시민들의 의식 함양을 목표로 한다.
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
      <Zoom margin="0">
        <Image src={`${CDN}/8.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/9.jpg`} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
