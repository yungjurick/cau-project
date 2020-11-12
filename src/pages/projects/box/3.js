import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

import Video from "../../../components/video";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/box/team3";

export default () => {
  return (
    <ProjectLayout title="MULTIPLEX LIBRARY : 이야기하는 도서관" names="김이현">
      <Desc fw={400}>
        선유도 이야기관은 2013년에 도심재생과 재활용을 모토로 문화 전시공간으로
        개관하였다. 풍부한 자연환경 뿐만 아니라 소극장, 물놀이공간, 환경학습실
        등 기반시설을 갖추었음에도 불구하고 접근성과 콘텐츠 부족으로 활용도가
        낮은 상태로 방치 되고 있다. 이야기관은 한강에 의해 시내와 분리 되어있는
        위치이기에 도서관에 적합한 장소라고 생각하여, 환경 친화적인 도서관과
        복합문화공간으로 탈바꿈 시켜 활용도를 높이고, 트리비움 교육(참여활동)을
        메인 주제로 삼아 미래에 대비할 수 있는 공간으로 활용 하고자 한다.
      </Desc>

      <Video
        style={{ marginTop: "4rem" }}
        src="https://www.youtube.com/embed/CwcmuPDtw-c"
      />

      <Zoom margin="4rem 0 0 0">
        <Image src={`${CDN}/01.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/02.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/03.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/04.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/05.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/06.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/07.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/08.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/09.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/10.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/11.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/12.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/13.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/14.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/15.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/16.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/17.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/18.jpg`} />
      </Zoom>
      <Desc style={{ textAlign: "center", marginTop: "4rem" }} fw={400}>
        <a
          style={{ textDecoration: "underline" }}
          href="https://naver.me/FEtydsr3"
          rel="noreferrer"
          target="_blank"
        >
          이현에게 소감 남기기
        </a>
      </Desc>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
