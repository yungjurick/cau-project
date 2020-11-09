import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/box/team10/1.jpg";
import src2 from "../../../static/images/projects/box/team10/2.jpg";
import src3 from "../../../static/images/projects/box/team10/3.jpg";
import src4 from "../../../static/images/projects/box/team10/4.jpg";
import src5 from "../../../static/images/projects/box/team10/5.jpg";
import src6 from "../../../static/images/projects/box/team10/6.jpg";
import src7 from "../../../static/images/projects/box/team10/7.jpg";
import src8 from "../../../static/images/projects/box/team10/8.jpg";
import src9 from "../../../static/images/projects/box/team10/9.jpg";

export default () => {
  return (
    <ProjectLayout title="SPREAD OUT" names="안현정">
      <Desc fw={400}>
        사회가 나날이 발전함에 따라 주변 자연환경은 점차 파괴되어가고, 그곳을
        서식지로 삼는 우리 주변의 야생동물에게도 영향을 끼친다. 하지만 그에 따른
        시민 의식은 턱없이 부족하다. 본 프로젝트는 야생동물 보호센터를 통해
        야생동물의 보호와 자연생태계에 대한 시민들의 의식 함양을 목표로 한다.
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
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
