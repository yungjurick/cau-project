import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Video from "../../../components/video";
import Zoom from "../../../components/zoom";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/frame/team3";

export default () => {
  return (
    <ProjectLayout title="52Hz" names="곽가 | 장령희">
      <Desc fw={400}>
        해양오염이 점점 심각해지는 2020년 현재, 바닷속에서 살고 있는
        해양생물들이 가장 많은 피해를 보고 있다. 가장 큰 해양생물인 고래는
        바닷속에서 음파 헤르츠로 교류한다. 하지만, Alice라는 고래는 다른 고래의
        음파신호에 비해 높은 '52헤르츠'이기 때문에, 아무도 그의 신호를 받을 수
        없고 그의 존재조차도 모른다. 이 외로운 고래처럼 불쌍한 해양생물들이
        사람들한테 외치는 구급 신호를 아무도 듣지 못한다.우리는 고래의 시선으로
        해양생태가 어떻게 파괴되고 있는지에 대해 대중들이 중시해 주시길 바라는
        마음을 전달하고자 한다.
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

      <Video
        style={{ margin: "4rem 0" }}
        src="https://www.youtube.com/embed/kWLZxj40n-0"
      />
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
