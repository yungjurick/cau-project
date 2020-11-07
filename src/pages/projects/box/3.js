import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/box/team3/1.png";

import Video from "../../../components/video";

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
        src="https://www.youtube.com/embed/xd7YE9ijrtc"
      />

      <Zoom margin="4rem 0">
        <Image src={src1} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
