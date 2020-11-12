import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/frame/team1";

export default () => {
  return (
    <ProjectLayout title="안녕, 마음속에 스토리" names="이박문 | 유사동">
      <Desc fw={400}>
        어린이를 위한 유휴공간 재생 프로젝트. 정신 질환이 있는 어린아이들이 이
        센터에 들어서면 안정감을 느끼고, 전통적인 의료 분위기에서 벗어나
        의료진과 아이와의 거리를 좁힐 수 있는 아동 심리 치료 센터를 제안한다.
        마음으로 소통하고 서로 경청하면서 의료진과 인터렉션을 강화했다.
      </Desc>
      <Zoom margin="4rem 0 0 0">
        <Image src={`${CDN}/1.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/2.png`} />
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
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
