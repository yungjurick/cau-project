import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import WrapForTeam from "../../../components/wrapForTeam";
import Zoom from "../../../components/zoom";
import Video from "../../../components/video";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/box/team6";

export default () => {
  return (
    <ProjectLayout
      title="MONODERN, 여의도 지하벙커 renovation project"
      names="이주영"
    >
      <Desc fw={400}>
        <span style={{ fontWeight: 700 }}>
          박정희 대통령 시절 유사시 요인 대피용 방공호
        </span>
        였던 것으로 추정되는 여의도 지하벙커는 2005년 버스환승센터 건립 중
        발견되었다. 이 곳은 현재 서울시립미술관의 운영 하 흰색 페인트를 칠한
        내벽을 덧대어{" "}
        <span style={{ fontWeight: 700 }}>깔끔하고 트렌디한 갤러리</span>,
        ‘SeMA벙커’로서 운영되고 있다.
      </Desc>

      <Desc fw={400}>
        여의도 벙커는 남북분단의 시대상황에 의해 생겨난 군부시대의 산물이자 우리
        역사의 암울한 단면이다. 역사적 교훈의 핵심인 negative heritage를
        사회에서 빠르게 지워가는 문화유산 프레임은 우리에게 끊임없이 modernity를
        강조한다. 과거는 폐기하고 새로운 시작만을 강요하는 사회에 올바른 미래는
        찾아오는가?{" "}
        <span style={{ fontWeight: 700 }}>
          과연 이 시대의 진정한 modernity는 무엇인가?
        </span>
      </Desc>

      <WrapForTeam
        margin="0"
        top="43.2%"
        src="https://www.youtube.com/embed/XIRKEGXqC0A"
      >
        <Zoom margin="4rem 0 0 0">
          <Image src={`${CDN}/1.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/2.jpg`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/3.jpg`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/4.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/5.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/6.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/7.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/8.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/9.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/10.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/11.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/12.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/13.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/14.png`} />
        </Zoom>

        <Zoom margin="0">
          <Image src={`${CDN}/15.png`} />
        </Zoom>

        <Video src="https://www.youtube.com/embed/NUCokiS_Vxs" />
      </WrapForTeam>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
