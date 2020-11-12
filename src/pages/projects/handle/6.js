import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import Video from "../../../components/video";

export default () => {
  return (
    <ProjectLayout title="적정공간" names="마정서 | 양지원 | 양진선">
      <Desc fw={400}>
        바쁜 일상 속 자신의 마음을 돌보지 못하는 사람들. 누구나 겪는 불안한
        감정들을 공감해주고 위로 받을 수 있는 일상의 공간은 어디에 없을까?
        <br />
        적정기술과 같이 소박하지만 커다란 삶의 변화를 이룰 수 있는 개념을
        바탕으로 일상에 지치고 마음이 아픈 현대인이 자연스럽게 힐링을 얻을 수
        있는 적정공간을 제안한다.
      </Desc>

      <Video
        style={{ marginTop: "4rem" }}
        src="https://www.youtube.com/embed/0IUSLlbH_Y8"
      />

      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team6/1.png" />
      </Zoom>

      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team6/2.gif" />

      <Video
        style={{ margin: 0 }}
        src="https://www.youtube.com/embed/Ihd0cAfwG64"
      />

      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team6/3.gif" />

      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team6/4.gif" />
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
