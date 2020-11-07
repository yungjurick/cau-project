import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import WrapForTeam from "../../../components/wrapForTeam";
import Zoom from "../../../components/zoom";
import src0 from "../../../static/images/projects/box/team6/0.png";
import src1 from "../../../static/images/projects/box/team6/1.png";
import src2 from "../../../static/images/projects/box/team6/2.png";
import src3 from "../../../static/images/projects/box/team6/3.png";
import src4 from "../../../static/images/projects/box/team6/4.png";
import src5 from "../../../static/images/projects/box/team6/5.png";
import src6 from "../../../static/images/projects/box/team6/6.png";
import src7 from "../../../static/images/projects/box/team6/7.png";
import src8 from "../../../static/images/projects/box/team6/8.png";
import src9 from "../../../static/images/projects/box/team6/9.png";
import src10 from "../../../static/images/projects/box/team6/10.png";
import src11 from "../../../static/images/projects/box/team6/11.png";
import src12 from "../../../static/images/projects/box/team6/12.png";
import src13 from "../../../static/images/projects/box/team6/13.png";
import src14 from "../../../static/images/projects/box/team6/14.png";
import src15 from "../../../static/images/projects/box/team6/15.png";

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
        top="52.2%"
        src="https://www.youtube.com/embed/NUCokiS_Vxs"
      >
        <Zoom margin="4rem 0 0 0">
          <Image src={src0} />
        </Zoom>

        <Zoom margin="0">
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
      </WrapForTeam>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
