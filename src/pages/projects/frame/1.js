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
        이것은 유휴공간 프로젝트이다. 어린이의 마음은 민감한다. 특히 정신
        질환이있는 어린이다. 이센터에 들어서면 안정감을 느끼고, 전통적인 의료
        분위기에서 벗어나 아이와의 거리를 좁히길 바란다. 의료진과 아이의
        인터랙션을 강화하다. 마음으로 소통하고 서로 경청하면서 전통적인 의료적
        분위기에서 벗어나다.민감한 어린이를 더 잘 치료하기 위한 유휴공간을
        재생하고 아동 심리 치료 센터를 짓다. 이 센터에 와서 마음을 치유하다.
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
