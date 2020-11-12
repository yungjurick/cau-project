import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import Video from "../../../components/video";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team8";

export default () => {
  return (
    <ProjectLayout title="Meet Oasis" names="이시혜">
      <Desc fw={400}>
        20대 청년들을 위한 작은 자연도서관은 1~4층 특별구역 설치를 통해 사막에서
        오아시스까지의 분위기를 한껏 살리고, 도서관의 본질을 잃지 않으면서
        이곳을 찾는 청년들이 그 환경과 분위기를 통해 치유될 수 있기를 희망한다.
      </Desc>

      <Zoom margin="4rem 0">
        <Image src={`${CDN}/1.jpg`} />
      </Zoom>
      <Video src="https://www.youtube.com/embed/zwt1yl1k6d0" />
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
