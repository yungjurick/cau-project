import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/frame/team1/1.jpg";
import src2 from "../../../static/images/projects/frame/team1/2.png";
import src3 from "../../../static/images/projects/frame/team1/3.jpg";
import src4 from "../../../static/images/projects/frame/team1/4.jpg";
import src5 from "../../../static/images/projects/frame/team1/5.jpg";

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
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
