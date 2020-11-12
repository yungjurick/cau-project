import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

import Video from "../../../components/video";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/box/team5";

export default () => {
  return (
    <ProjectLayout title="매일이 메아리" names="임아림 | 한유진">
      <Desc fw={700}>즐거운 기부 문화 확산을 위한 목소리 스페이스</Desc>
      <Desc fw={400}>
        목소리는 진실된 감정을 담고 있으며 아무런 준비물이 필요 없다. 그렇기
        때문에 목소리를 여과했을 때 가장 진정성 있고 부담없는 기부가 실현될 수
        있다고 생각한다.
        <br /> 우리는 목소리가 지닌 무한한 가능성으로, 자기 본연의 즐거움과
        사회적 기여까지 이룰 수 있는 공간을 제시하고자 한다.
      </Desc>
      <Video
        style={{ marginTop: "4rem" }}
        src="https://www.youtube.com/embed/AnteLIUMRDA"
      />
      <Zoom margin="4rem 0 0 0">
        <Image src={`${CDN}/1.jpg`} />
      </Zoom>
      <Gif src={`${CDN}/2.gif`} />
      <Zoom margin="0">
        <Image src={`${CDN}/3.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/4_1.jpg`} />
      </Zoom>
      <Gif src={`${CDN}/4.gif`} />
      <Gif src={`${CDN}/5.gif`} />
      <Gif src={`${CDN}/6.gif`} />
      <Zoom margin="0">
        <Image src={`${CDN}/6.jpg`} />
      </Zoom>
      <Gif src={`${CDN}/7.gif`} />
      <Gif src={`${CDN}/8.gif`} />
      <Zoom margin="0">
        <Image src={`${CDN}/9.jpg`} />
      </Zoom>
      <Gif src={`${CDN}/10.gif`} />
      <Zoom margin="0">
        <Image src={`${CDN}/11.jpg`} />
      </Zoom>
      <Gif src={`${CDN}/12.gif`} />
      <Zoom margin="0">
        <Image src={`${CDN}/13.jpg`} />
      </Zoom>
      <Gif src={`${CDN}/14.gif`} />
      <Zoom margin="0">
        <Image src={`${CDN}/15.jpg`} />
      </Zoom>
      <Desc fw={400} style={{ textAlign: "center", marginTop: "4rem" }}>
        <a
          style={{ textDecoration: "underline" }}
          target="_blank"
          rel="noreferrer"
          href="https://naver.me/xpVpn1bA"
        >
          열심히 준비한 아림 유진에게 한마디 남기기
        </a>
      </Desc>{" "}
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
