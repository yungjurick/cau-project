import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/box/team3/01.jpg";
import src2 from "../../../static/images/projects/box/team3/02.jpg";
import src3 from "../../../static/images/projects/box/team3/03.jpg";
import src4 from "../../../static/images/projects/box/team3/04.jpg";
import src5 from "../../../static/images/projects/box/team3/05.jpg";
import src6 from "../../../static/images/projects/box/team3/06.jpg";
import src7 from "../../../static/images/projects/box/team3/07.jpg";
import src8 from "../../../static/images/projects/box/team3/08.jpg";
import src9 from "../../../static/images/projects/box/team3/09.jpg";
import src10 from "../../../static/images/projects/box/team3/10.jpg";
import src11 from "../../../static/images/projects/box/team3/11.jpg";
import src12 from "../../../static/images/projects/box/team3/12.jpg";
import src13 from "../../../static/images/projects/box/team3/13.jpg";
import src14 from "../../../static/images/projects/box/team3/14.jpg";
import src15 from "../../../static/images/projects/box/team3/15.jpg";
import src16 from "../../../static/images/projects/box/team3/16.jpg";
import src17 from "../../../static/images/projects/box/team3/17.jpg";
import src18 from "../../../static/images/projects/box/team3/18.jpg";

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
        src="https://www.youtube.com/embed/CwcmuPDtw-c"
      />

      <Zoom margin="4rem 0 0 0">
        <Image src={src1} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src2} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src3} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src4} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src5} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src6} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src7} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src8} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src9} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src10} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src11} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src12} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src13} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src14} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src15} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src16} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src17} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src18} />
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
